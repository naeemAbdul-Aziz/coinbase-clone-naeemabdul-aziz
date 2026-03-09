import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/* ── Static data ── */
const TABS = ['Top', 'Crypto', 'Stocks', 'Predictions', 'Perpetuals', 'Futures'];

const CRYPTO = [
	{ symbol: 'BTCUSDT',  name: 'Bitcoin',   ticker: 'BTC',  rank: 1, mcapUsd: 1.3e12,  volUsd: 26.7e9,  img: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
	{ symbol: 'ETHUSDT',  name: 'Ethereum',  ticker: 'ETH',  rank: 2, mcapUsd: 235e9,   volUsd: 13.1e9,  img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
	{ symbol: null,       name: 'Tether',    ticker: 'USDT', rank: 3, mcapUsd: 184e9,   volUsd: 54.6e9,  img: 'https://assets.coingecko.com/coins/images/325/small/Tether.png',    fixedPrice: 1.0, fixedChange: 0.01 },
	{ symbol: 'BNBUSDT',  name: 'BNB',       ticker: 'BNB',  rank: 4, mcapUsd: 84.5e9,  volUsd: 1.2e9,   img: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
	{ symbol: 'XRPUSDT',  name: 'XRP',       ticker: 'XRP',  rank: 5, mcapUsd: 82.9e9,  volUsd: 1.4e9,   img: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
	{ symbol: 'USDCUSDT', name: 'USDC',      ticker: 'USDC', rank: 6, mcapUsd: 77.2e9,  volUsd: 5.2e9,   img: 'https://assets.coingecko.com/coins/images/6319/small/usdc.png',     fixedChange: 0 },
	{ symbol: 'SOLUSDT',  name: 'Solana',    ticker: 'SOL',  rank: 7, mcapUsd: 47.2e9,  volUsd: 2.2e9,   img: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
	{ symbol: 'TRXUSDT',  name: 'TRON',      ticker: 'TRX',  rank: 8, mcapUsd: 27.2e9,  volUsd: 383e6,   img: 'https://assets.coingecko.com/coins/images/1094/small/tron-logo.png' },
];

const STOCKS = [
	{ name: 'NVIDIA',                ticker: 'NVDA',  priceUsd: 178.03, change: -2.90, volUsd: 189.6e6, mcapUsd: 4.3e12 },
	{ name: 'Apple',                 ticker: 'AAPL',  priceUsd: 257.00, change: -1.26, volUsd: 41.2e6,  mcapUsd: 3.8e12 },
	{ name: 'Alphabet Inc. Class A', ticker: 'GOOGL', priceUsd: 297.13, change: -1.25, volUsd: 25.6e6,  mcapUsd: 3.6e12 },
	{ name: 'Alphabet Inc. Class C', ticker: 'GOOG',  priceUsd: 297.10, change: -1.27, volUsd: 17.6e6,  mcapUsd: 3.6e12 },
	{ name: 'Microsoft',             ticker: 'MSFT',  priceUsd: 407.61, change: -0.75, volUsd: 31.2e6,  mcapUsd: 3e12   },
	{ name: 'Amazon.com',            ticker: 'AMZN',  priceUsd: 212.53, change: -2.93, volUsd: 51.2e6,  mcapUsd: 2.3e12 },
	{ name: 'Taiwan Semiconductor',  ticker: 'TSM',   priceUsd: 339.80, change: -3.97, volUsd: 13.8e6,  mcapUsd: 1.8e12 },
	{ name: 'Meta Platforms',        ticker: 'META',  priceUsd: 641.33, change: -2.91, volUsd: 13.2e6,  mcapUsd: 1.6e12 },
];

const FUTURES = [
	{ name: 'BTC Futures',      ticker: 'BTC',     symbol: 'BTCUSDT',  label: 'Mar 2026 · CDE', volUsd: 19.1e6,  oiUsd: 43.8e3, img: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
	{ name: 'ETH Futures',      ticker: 'ETH',     symbol: 'ETHUSDT',  label: 'Mar 2026 · CDE', volUsd: 4.8e6,   oiUsd: 55.5e3, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
	{ name: 'SOL Futures',      ticker: 'SOL',     symbol: 'SOLUSDT',  label: 'Mar 2026 · CDE', volUsd: 1.2e6,   oiUsd: 13.3e3, img: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
	{ name: 'XRP Futures',      ticker: 'XRP',     symbol: 'XRPUSDT',  label: 'Mar 2026 · CDE', volUsd: 811e3,   oiUsd: 30.3e3, img: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
	{ name: '1000SHIB Futures', ticker: '1000SHIB',symbol: 'SHIBUSDT', label: 'Mar 2026 · CDE', volUsd: 178.9e3, oiUsd: 659,    img: 'https://assets.coingecko.com/coins/images/11939/small/shiba.png', mul: 1000 },
	{ name: 'ADA Futures',      ticker: 'ADA',     symbol: 'ADAUSDT',  label: 'Mar 2026 · CDE', volUsd: 159.2e3, oiUsd: 1.3e3,  img: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
	{ name: 'DOT Futures',      ticker: 'DOT',     symbol: 'DOTUSDT',  label: 'Mar 2026 · CDE', volUsd: 102.6e3, oiUsd: 650,    img: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' },
	{ name: 'LTC Futures',      ticker: 'LTC',     symbol: 'LTCUSDT',  label: 'Mar 2026 · CDE', volUsd: 92.4e3,  oiUsd: 945,    img: 'https://assets.coingecko.com/coins/images/2/small/litecoin.png' },
];

const PERPS = [
	{ name: 'BTC PERP',  ticker: 'BTC',  symbol: 'BTCUSDT',  label: 'CDE', volUsd: 99e6,    fund: '-0.0009%', img: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
	{ name: 'ETH PERP',  ticker: 'ETH',  symbol: 'ETHUSDT',  label: 'CDE', volUsd: 23.5e6,  fund: '0.0002%',  img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
	{ name: 'SOL PERP',  ticker: 'SOL',  symbol: 'SOLUSDT',  label: 'CDE', volUsd: 8.1e6,   fund: '0.0006%',  img: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
	{ name: 'XRP PERP',  ticker: 'XRP',  symbol: 'XRPUSDT',  label: 'CDE', volUsd: 3.5e6,   fund: '0.0006%',  img: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
	{ name: 'PAXG PERP', ticker: 'PAXG', symbol: 'PAXGUSDT', label: 'CDE', volUsd: 1.9e6,   fund: '0.0057%',  img: 'https://assets.coingecko.com/coins/images/9519/small/paxg.PNG' },
	{ name: 'PEPE PERP', ticker: 'PEPE', symbol: 'PEPEUSDT', label: 'CDE', volUsd: 1.2e6,   fund: '-0.0012%', img: 'https://assets.coingecko.com/coins/images/29850/small/pepe-token.jpeg' },
	{ name: 'SUI PERP',  ticker: 'SUI',  symbol: 'SUIUSDT',  label: 'CDE', volUsd: 577.3e3, fund: '0.0018%',  img: 'https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg' },
	{ name: 'ADA PERP',  ticker: 'ADA',  symbol: 'ADAUSDT',  label: 'CDE', volUsd: 531.2e3, fund: '0.0022%',  img: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
];

const BINANCE_SYMBOLS = ['BTCUSDT','ETHUSDT','BNBUSDT','XRPUSDT','USDCUSDT','SOLUSDT','TRXUSDT','ADAUSDT','DOTUSDT','LTCUSDT','SHIBUSDT','PEPEUSDT','SUIUSDT','PAXGUSDT'];

/* ── Formatters ── */
function fmtAmt(n) {
	if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
	if (n >= 1e9)  return (n / 1e9).toFixed(1)  + 'B';
	if (n >= 1e6)  return (n / 1e6).toFixed(1)  + 'M';
	if (n >= 1e3)  return (n / 1e3).toFixed(1)  + 'K';
	return n.toFixed(0);
}
function fmtPrice(n) {
	if (n >= 10000) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	if (n >= 1)     return n.toFixed(2);
	if (n >= 0.01)  return n.toFixed(4);
	return n.toFixed(6);
}

/* ── Stock icon ── */
const StockIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-60">
		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" opacity="0.3"/>
		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-6h2v2h-2zm0-8h2v6h-2z" fill="currentColor"/>
	</svg>
);

/* ── Row components ── */
const CryptoRow = ({ item, prices, ghsRate, query }) => {
	const priceData = item.symbol ? prices[item.symbol] : null;
	const priceUsd = item.fixedPrice ?? priceData?.price ?? 0;
	const change   = item.fixedChange !== undefined ? item.fixedChange : (priceData?.change ?? 0);
	const priceGhs = priceUsd * ghsRate;
	const volGhs   = item.volUsd * ghsRate;
	const mcapGhs  = item.mcapUsd * ghsRate;
	const up = change >= 0;

	if (query && !item.name.toLowerCase().includes(query.toLowerCase()) && !item.ticker.toLowerCase().includes(query.toLowerCase())) return null;

	return (
		<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-5 transition-colors group">
			<img src={item.img} alt={item.ticker} width={40} height={40} className="rounded-full shrink-0" onError={(e) => { e.target.style.display='none'; }} />
			<div className="flex-1 min-w-0">
				<div className="flex items-center gap-1.5">
					<span className="text-[0.875rem] font-semibold text-gray-100">{item.name}</span>
					{item.rank && (
						<span className="text-[0.6875rem] font-medium text-gray-60 bg-gray-10 px-1.5 py-0.5 rounded-md">#{item.rank}</span>
					)}
				</div>
				<p className="text-[0.8125rem] text-gray-60">{item.ticker}</p>
			</div>
			<div className="text-right shrink-0 mr-8">
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(volGhs)} vol</p>
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(mcapGhs)} mcap</p>
			</div>
			<div className="text-right shrink-0 min-w-[120px]">
				<p className="text-[0.875rem] font-semibold text-gray-100">GHS {fmtPrice(priceGhs)}</p>
				<p className={`text-[0.8125rem] font-medium ${up ? 'text-green-600' : 'text-red-500'}`}>
					{up ? '↗' : '↘'} {Math.abs(change).toFixed(2)}%
				</p>
			</div>
		</a>
	);
};

const StockRow = ({ item, ghsRate, query }) => {
	const priceGhs = item.priceUsd * ghsRate;
	const volGhs   = item.volUsd * ghsRate;
	const mcapGhs  = item.mcapUsd * ghsRate;
	const up = item.change >= 0;

	if (query && !item.name.toLowerCase().includes(query.toLowerCase()) && !item.ticker.toLowerCase().includes(query.toLowerCase())) return null;

	return (
		<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-5 transition-colors">
			<div className="w-10 h-10 rounded-full bg-blue-5 flex items-center justify-center shrink-0">
				<StockIcon />
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-[0.875rem] font-semibold text-gray-100">{item.name}</p>
				<p className="text-[0.8125rem] text-gray-60">{item.ticker}</p>
			</div>
			<div className="text-right shrink-0 mr-8">
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(volGhs)} vol</p>
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(mcapGhs)} mcap</p>
			</div>
			<div className="text-right shrink-0 min-w-[120px]">
				<p className="text-[0.875rem] font-semibold text-gray-100">GHS {fmtPrice(priceGhs)}</p>
				<p className={`text-[0.8125rem] font-medium ${up ? 'text-green-600' : 'text-red-500'}`}>
					{up ? '↗' : '↘'} {Math.abs(item.change).toFixed(2)}%
				</p>
			</div>
		</a>
	);
};

const FuturesRow = ({ item, prices, ghsRate, query }) => {
	const priceData = prices[item.symbol];
	const priceUsd  = priceData?.price ?? 0;
	const change    = priceData?.change ?? 0;
	const mul       = item.mul ?? 1;
	const priceGhs  = priceUsd * ghsRate * mul;
	const volGhs    = item.volUsd * ghsRate;
	const oiGhs     = item.oiUsd * ghsRate;
	const up = change >= 0;

	if (query && !item.name.toLowerCase().includes(query.toLowerCase()) && !item.ticker.toLowerCase().includes(query.toLowerCase())) return null;

	return (
		<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-5 transition-colors">
			<img src={item.img} alt={item.ticker} width={40} height={40} className="rounded-full shrink-0" onError={(e) => { e.target.style.display='none'; }} />
			<div className="flex-1 min-w-0">
				<p className="text-[0.875rem] font-semibold text-gray-100">{item.name}</p>
				<p className="text-[0.8125rem] text-gray-60">{item.label}</p>
			</div>
			<div className="text-right shrink-0 mr-8">
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(volGhs)} vol</p>
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(oiGhs)} oi</p>
			</div>
			<div className="text-right shrink-0 min-w-[120px]">
				<p className="text-[0.875rem] font-semibold text-gray-100">GHS {fmtPrice(priceGhs)}</p>
				<p className={`text-[0.8125rem] font-medium ${up ? 'text-green-600' : 'text-red-500'}`}>
					{up ? '↗' : '↘'} {Math.abs(change).toFixed(2)}%
				</p>
			</div>
		</a>
	);
};

const PerpRow = ({ item, prices, ghsRate, query }) => {
	const priceData = prices[item.symbol];
	const priceUsd  = priceData?.price ?? 0;
	const change    = priceData?.change ?? 0;
	const priceGhs  = priceUsd * ghsRate;
	const volGhs    = item.volUsd * ghsRate;
	const up = change >= 0;

	if (query && !item.name.toLowerCase().includes(query.toLowerCase()) && !item.ticker.toLowerCase().includes(query.toLowerCase())) return null;

	return (
		<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-5 transition-colors">
			<img src={item.img} alt={item.ticker} width={40} height={40} className="rounded-full shrink-0" onError={(e) => { e.target.style.display='none'; }} />
			<div className="flex-1 min-w-0">
				<p className="text-[0.875rem] font-semibold text-gray-100">{item.name}</p>
				<p className="text-[0.8125rem] text-gray-60">{item.label}</p>
			</div>
			<div className="text-right shrink-0 mr-8">
				<p className="text-[0.8125rem] text-gray-60">GHS {fmtAmt(volGhs)} vol</p>
				<p className="text-[0.8125rem] text-gray-60">{item.fund} fund</p>
			</div>
			<div className="text-right shrink-0 min-w-[120px]">
				<p className="text-[0.875rem] font-semibold text-gray-100">GHS {fmtPrice(priceGhs)}</p>
				<p className={`text-[0.8125rem] font-medium ${up ? 'text-green-600' : 'text-red-500'}`}>
					{up ? '↗' : '↘'} {Math.abs(change).toFixed(2)}%
				</p>
			</div>
		</a>
	);
};

/* ── Main SearchDropdown ── */
const SearchDropdown = ({ query }) => {
	const [activeTab, setActiveTab] = useState('Top');
	const [prices, setPrices]       = useState({});
	const [ghsRate, setGhsRate]     = useState(15.5);

	useEffect(() => {
		let cancelled = false;
		async function fetchData() {
			try {
				const [tickerRes, fxRes] = await Promise.all([
					fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(BINANCE_SYMBOLS)}`),
					fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
				]);
				const [tickers, fx] = await Promise.all([tickerRes.json(), fxRes.json()]);
				if (cancelled) return;
				const map = {};
				tickers.forEach(t => {
					map[t.symbol] = { price: parseFloat(t.lastPrice), change: parseFloat(t.priceChangePercent), vol: parseFloat(t.quoteVolume) };
				});
				setPrices(map);
				setGhsRate(fx?.usd?.ghs ?? 15.5);
			} catch { /* use defaults */ }
		}
		fetchData();
		return () => { cancelled = true; };
	}, []);

	const content = useMemo(() => {
		switch (activeTab) {
			case 'Crypto': return CRYPTO;
			case 'Stocks': return STOCKS;
			case 'Futures': return FUTURES;
			case 'Perpetuals': return PERPS;
			default: return null;
		}
	}, [activeTab]);

	return (
		<motion.div
			initial={{ opacity: 0, y: -6 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -6 }}
			transition={{ duration: 0.15, ease: 'easeOut' }}
			className="absolute top-full left-0 w-full z-50 pointer-events-none"
		>
			<div className="w-full max-w-[1228px] mx-auto px-8 lg:px-12 pointer-events-none">
				<div className="ml-auto w-full max-w-[680px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden pointer-events-auto">
					{/* Tabs */}
					<div className="flex items-center gap-1.5 px-4 pt-4 pb-3">
						{TABS.map(tab => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`px-3.5 py-1.5 rounded-full text-[0.8125rem] font-medium transition-colors ${
									activeTab === tab
										? 'bg-gray-100 text-white'
										: 'bg-gray-10 text-gray-100 hover:bg-gray-15'
								}`}
							>
								{tab}
							</button>
						))}
					</div>

					{/* Divider */}
					<hr className="border-gray-10" />

					{/* Content */}
					<div className="max-h-[480px] overflow-y-auto">
						{activeTab === 'Top' && (
							<>
								<p className="px-4 pt-4 pb-1 text-[0.6875rem] font-semibold text-gray-60 tracking-wider uppercase">Crypto</p>
								{CRYPTO.slice(0, 3).map(item => (
									<CryptoRow key={item.ticker} item={item} prices={prices} ghsRate={ghsRate} query={query} />
								))}
								<p className="px-4 pt-4 pb-1 text-[0.6875rem] font-semibold text-gray-60 tracking-wider uppercase">Stocks</p>
								{STOCKS.slice(0, 3).map(item => (
									<StockRow key={item.ticker} item={item} ghsRate={ghsRate} query={query} />
								))}
								<p className="px-4 pt-4 pb-1 text-[0.6875rem] font-semibold text-gray-60 tracking-wider uppercase">Predictions</p>
								<p className="px-4 py-3 text-[0.8125rem] text-gray-60">Coming soon</p>
							</>
						)}

						{activeTab === 'Crypto' && CRYPTO.map(item => (
							<CryptoRow key={item.ticker} item={item} prices={prices} ghsRate={ghsRate} query={query} />
						))}

						{activeTab === 'Stocks' && STOCKS.map(item => (
							<StockRow key={item.ticker} item={item} ghsRate={ghsRate} query={query} />
						))}

						{activeTab === 'Predictions' && (
							<p className="px-4 py-8 text-center text-[0.8125rem] text-gray-60">Coming soon</p>
						)}

						{activeTab === 'Futures' && FUTURES.map(item => (
							<FuturesRow key={item.ticker} item={item} prices={prices} ghsRate={ghsRate} query={query} />
						))}

						{activeTab === 'Perpetuals' && PERPS.map(item => (
							<PerpRow key={item.ticker} item={item} prices={prices} ghsRate={ghsRate} query={query} />
						))}
					</div>
					<div className="h-4" />
				</div>
			</div>
		</motion.div>
	);
};

export default SearchDropdown;
