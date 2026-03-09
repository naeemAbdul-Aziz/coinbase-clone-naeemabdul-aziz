import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';

const tabs = ['Tradable', 'Top gainers', 'New on Coinbase'];
const POLL_MS = 3000;
const FALLBACK_GHS = 16.5;

/* ── Coin list (order = "Tradable" ranking) ── */
const COIN_META = [
	{ binance: 'BTCUSDT',   name: 'Bitcoin',         symbol: 'BTC'   },
	{ binance: 'ETHUSDT',   name: 'Ethereum',         symbol: 'ETH'   },
	{ binance: 'BNBUSDT',   name: 'BNB',              symbol: 'BNB'   },
	{ binance: 'SOLUSDT',   name: 'Solana',           symbol: 'SOL'   },
	{ binance: 'XRPUSDT',   name: 'XRP',              symbol: 'XRP'   },
	{ binance: 'ADAUSDT',   name: 'Cardano',          symbol: 'ADA'   },
	{ binance: 'DOGEUSDT',  name: 'Dogecoin',         symbol: 'DOGE'  },
	{ binance: 'DOTUSDT',   name: 'Polkadot',         symbol: 'DOT'   },
	{ binance: 'LTCUSDT',   name: 'Litecoin',         symbol: 'LTC'   },
	{ binance: 'AVAXUSDT',  name: 'Avalanche',        symbol: 'AVAX'  },
	{ binance: 'LINKUSDT',  name: 'Chainlink',        symbol: 'LINK'  },
	{ binance: 'UNIUSDT',   name: 'Uniswap',          symbol: 'UNI'   },
	{ binance: 'ATOMUSDT',  name: 'Cosmos',           symbol: 'ATOM'  },
	{ binance: 'XLMUSDT',   name: 'Stellar',          symbol: 'XLM'   },
	{ binance: 'ETCUSDT',   name: 'Ethereum Classic', symbol: 'ETC'   },
	{ binance: 'AAVEUSDT',  name: 'Aave',             symbol: 'AAVE'  },
	{ binance: 'ALGOUSDT',  name: 'Algorand',         symbol: 'ALGO'  },
	{ binance: 'FILUSDT',   name: 'Filecoin',         symbol: 'FIL'   },
	{ binance: 'TRXUSDT',   name: 'TRON',             symbol: 'TRX'   },
	{ binance: 'XTZUSDT',   name: 'Tezos',            symbol: 'XTZ'   },
	{ binance: 'MKRUSDT',   name: 'Maker',            symbol: 'MKR'   },
	{ binance: 'COMPUSDT',  name: 'Compound',         symbol: 'COMP'  },
	{ binance: 'DASHUSDT',  name: 'Dash',             symbol: 'DASH'  },
	{ binance: 'EOSUSDT',   name: 'EOS',              symbol: 'EOS'   },
	{ binance: 'BATUSDT',   name: 'Basic Attention',  symbol: 'BAT'   },
	{ binance: 'VETUSDT',   name: 'VeChain',          symbol: 'VET'   },
	{ binance: 'NEOUSDT',   name: 'NEO',              symbol: 'NEO'   },
	{ binance: 'WAVESUSDT', name: 'Waves',            symbol: 'WAVES' },
	{ binance: 'SHIBUSDT',  name: 'Shiba Inu',        symbol: 'SHIB'  },
	{ binance: 'MATICUSDT', name: 'Polygon',          symbol: 'MATIC' },
];

// Fast O(1) lookup
const COIN_META_MAP = Object.fromEntries(COIN_META.map((c) => [c.binance, c]));
const BINANCE_SYMBOLS = encodeURIComponent(JSON.stringify(COIN_META.map((c) => c.binance)));

/* ── Helpers ── */
const getCoinIcon = (symbol) =>
	`https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/${symbol.toLowerCase()}.png`;

const formatPrice = (price) => {
	if (price == null) return '--';
	return `GHS ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

/* ── Icons ── */
const ArrowDown = () => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M9.5 8.5L2.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M9.5 3.5V8.5H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
const ArrowUp = () => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M2.5 3.5L9.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M2.5 8.5V3.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

/* ── Animated price: only flips the digits that actually changed ──
   Strategy:
   - useLayoutEffect keeps prevValueRef in sync AFTER each paint, so
     during the current render prevValueRef still holds the OLD string.
   - We diff char-by-char (right-aligned so digit positions match).
   - Changed chars get a new `key` → React remounts that span → CSS
     animation fires from 0% for just that character.
── */
const AnimatedPrice = ({ value, dir }) => {
	const prevRef = useRef(value);
	const prevValue = prevRef.current;

	// Update after paint so next render gets current as "previous"
	useLayoutEffect(() => {
		prevRef.current = value;
	});

	const chars = value.split('');
	// Right-align: pad the shorter string on the left so digit positions line up
	const maxLen = Math.max(chars.length, prevValue.length);
	const paddedNew  = value.padStart(maxLen, ' ').split('');
	const paddedPrev = prevValue.padStart(maxLen, ' ').split('');

	return (
		<span className="inline-flex tabular-nums text-base leading-[1em] font-normal text-white">
			{paddedNew.map((char, i) => {
				const changed = char !== paddedPrev[i];
				const animClass = changed && dir
					? dir === 'up' ? 'flip-up' : 'flip-down'
					: '';
				return (
					// key changes when the character value changes → remount → animation restarts
					<span
						key={`${i}-${char}`}
						className={animClass}
						style={{ display: 'inline-block' }}
					>
						{char}
					</span>
				);
			})}
		</span>
	);
};

/* ── Asset row ── */
const AssetRow = ({ asset }) => {
	const change = asset.price_change_percentage_24h;
	const isNegative = change < 0;
	const changeColorClass =
		change == null ? 'text-gray-40' : isNegative ? 'text-[#F0616D]' : 'text-[#27AD75]';

	return (
		<div className="flex flex-col w-full py-4 border-b border-white/[0.08] transition-colors duration-150 hover:bg-white/[0.04] rounded-lg cursor-pointer">
			<div className="flex items-center justify-between w-full gap-4">
				{/* Icon + name */}
				<div className="flex items-center gap-4 min-w-0 grow">
					<img
						src={getCoinIcon(asset.symbol)}
						alt={asset.name}
						width="32"
						height="32"
						className="shrink-0 rounded-full bg-gray-80"
						onError={(e) => {
							e.currentTarget.src = `https://placehold.co/32x32/32353D/ffffff?text=${asset.symbol.slice(0, 2)}`;
						}}
					/>
					<p className="text-xl font-semibold text-white m-0 truncate">{asset.name}</p>
				</div>

				{/* Price + change */}
				<div className="flex flex-col items-end px-2 py-0.5">
					<AnimatedPrice value={formatPrice(asset.current_price)} dir={asset.dir} />

					{change == null ? (
						<span className="text-sm leading-[1em] font-normal text-gray-40 mt-1">--</span>
					) : (
						<div className={`flex items-center gap-1 mt-1 ${changeColorClass}`}>
							{isNegative ? <ArrowDown /> : <ArrowUp />}
							<span className="text-base leading-[1em] font-normal tabular-nums">
								{Math.abs(change).toFixed(2)}%
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

/* ── Skeleton ── */
const SkeletonRow = () => (
	<div className="flex items-center justify-between w-full py-4 border-b border-white/[0.08] animate-pulse">
		<div className="flex items-center gap-4">
			<div className="w-8 h-8 rounded-full bg-gray-80" />
			<div className="w-24 h-5 rounded bg-gray-80" />
		</div>
		<div className="flex flex-col items-end gap-1">
			<div className="w-20 h-4 rounded bg-gray-80" />
			<div className="w-14 h-3 rounded bg-gray-80" />
		</div>
	</div>
);

/* ── Main ── */
const CryptoTable = () => {
	const [activeTab, setActiveTab] = useState('Tradable');
	// { [binanceSymbol]: { id, name, symbol, current_price, price_change_percentage_24h, dir, v } }
	const [coinsMap, setCoinsMap] = useState({});
	const [loading, setLoading]   = useState(true);
	const [error, setError]       = useState(null);
	const ghsRate = useRef(FALLBACK_GHS);

	/* ── Merge fresh Binance ticker data into state ── */
	const applyTickers = useCallback((tickers) => {
		setCoinsMap((prev) => {
			const next = { ...prev };
			tickers.forEach((t) => {
				const meta = COIN_META_MAP[t.symbol];
				if (!meta) return;

				const newUsd   = parseFloat(t.lastPrice);
				const newPrice = newUsd * ghsRate.current;
				const newChange = parseFloat(t.priceChangePercent);
				const old = prev[t.symbol];
				const oldPrice = old?.current_price ?? null;

				// Direction: up / down / null (no change or first load)
				let dir = null;
				if (oldPrice !== null) {
					if (newPrice > oldPrice + 0.0001) dir = 'up';
					else if (newPrice < oldPrice - 0.0001) dir = 'down';
				}

				next[t.symbol] = {
					id: t.symbol,
					name: meta.name,
					symbol: meta.symbol,
					current_price: newPrice,
					price_change_percentage_24h: newChange,
					dir,
					// Increment version only on real change so key-based remount fires
					v: dir ? (old?.v ?? 0) + 1 : (old?.v ?? 0),
				};
			});
			return next;
		});
	}, []);

	/* ── Fetch from Binance ── */
	const fetchPrices = useCallback(async () => {
		const res = await fetch(
			`https://api.binance.com/api/v3/ticker/24hr?symbols=${BINANCE_SYMBOLS}`
		);
		if (!res.ok) throw new Error(`Binance ${res.status}`);
		return res.json();
	}, []);

	/* ── Initial load: prices + GHS rate ── */
	useEffect(() => {
		let cancelled = false;

		(async () => {
			try {
				const [tickers, fxRes] = await Promise.all([
					fetchPrices(),
					fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
						.catch(() => null),
				]);

				if (fxRes?.ok) {
					try {
						const fx = await fxRes.json();
						ghsRate.current = fx?.usd?.ghs ?? FALLBACK_GHS;
					} catch { /* keep fallback */ }
				}

				if (!cancelled) {
					applyTickers(tickers);
					setLoading(false);
				}
			} catch (err) {
				if (!cancelled) {
					setError(err.message);
					setLoading(false);
				}
			}
		})();

		return () => { cancelled = true; };
	}, [fetchPrices, applyTickers]);

	/* ── Poll every 3 seconds ── */
	useEffect(() => {
		if (loading || error) return;

		const id = setInterval(async () => {
			try {
				const tickers = await fetchPrices();
				applyTickers(tickers);
			} catch { /* silent — keep showing last good data */ }
		}, POLL_MS);

		return () => clearInterval(id);
	}, [loading, error, fetchPrices, applyTickers]);

	/* ── Derive ordered arrays ── */
	const allCoins = COIN_META.map((c) => coinsMap[c.binance]).filter(Boolean);

	const getTabData = (tab) => {
		if (!allCoins.length) return [];
		switch (tab) {
			case 'Tradable':
				return allCoins.slice(0, 6);
			case 'Top gainers':
				return [...allCoins]
					.filter((c) => c.price_change_percentage_24h != null)
					.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
					.slice(0, 6);
			case 'New on Coinbase':
				return allCoins.slice(14, 20);
			default:
				return [];
		}
	};

	const currentData = getTabData(activeTab);

	return (
		<div className="flex flex-col w-full bg-gray-100 rounded-2xl p-6 min-h-[538px]">
			{/* Tabs */}
			<div className="flex gap-4 mb-4">
				<div className="flex flex-row items-center relative w-fit" role="tablist">
					{tabs.map((tab) => {
						const isActive = activeTab === tab;
						return (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								role="tab"
								aria-selected={isActive}
								className={`
									flex items-center justify-center px-4 h-10 min-w-[100px]
									border-none rounded-full whitespace-nowrap
									text-label-1 cursor-pointer transition-all duration-200
									${isActive
										? 'bg-white text-gray-100'
										: 'bg-transparent text-gray-40 hover:bg-white/10 hover:text-white'
									}
								`}
							>
								{tab}
							</button>
						);
					})}
				</div>
			</div>

			{/* List */}
			<div className="flex flex-col">
				{loading ? (
					<>
						<SkeletonRow /><SkeletonRow /><SkeletonRow />
						<SkeletonRow /><SkeletonRow /><SkeletonRow />
					</>
				) : error ? (
					<div className="flex items-center justify-center py-12">
						<p className="text-gray-40 text-sm text-center">
							Unable to load live data.<br />Check your connection.
						</p>
					</div>
				) : (
					currentData.map((asset) => (
						<AssetRow key={asset.id} asset={asset} />
					))
				)}
			</div>
		</div>
	);
};

export default CryptoTable;
