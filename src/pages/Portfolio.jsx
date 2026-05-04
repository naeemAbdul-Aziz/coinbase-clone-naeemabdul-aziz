import { useEffect, useState, useCallback, useRef } from 'react';
import api from '../services/api';
import { IllustrationPortfolio } from '../components/ui/FigmaIllustrations';

const CoinAvatar = ({ symbol, name, image, size = 9 }) => {
  const [imgOk, setImgOk] = useState(true);
  const letter = (symbol ?? name ?? '?')[0].toUpperCase();
  return (
    <div className={`w-${size} h-${size} rounded-full relative flex-shrink-0`}>
      {image && imgOk
        ? <img src={image} alt={symbol} className="w-full h-full rounded-full object-cover"
            onError={() => setImgOk(false)} />
        : <div className={`w-${size} h-${size} rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] font-bold text-sm`}>
            {letter}
          </div>
      }
    </div>
  );
};

export default function Portfolio() {
  const [wallets, setWallets]   = useState([]);
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading]   = useState(true);

  const fetchData = useCallback(() => {
    Promise.allSettled([api.get('/wallet/balances'), api.get('/wallet/portfolio')])
      .then(([w, p]) => {
        if (w.status === 'fulfilled') setWallets(w.value.data.wallets ?? []);
        if (p.status === 'fulfilled') setPortfolio(p.value.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const fetchRef = useRef(fetchData);
  useEffect(() => { fetchRef.current = fetchData; }, [fetchData]);

  useEffect(() => {
    fetchRef.current();
    const interval = setInterval(() => fetchRef.current(), 30_000);
    return () => clearInterval(interval);
  }, []);

  const totalBalance   = portfolio?.totalBalance ?? portfolio?.totalUsd ?? 0;
  const change24h      = portfolio?.change24h ?? portfolio?.change24hPercent ?? 0;
  const fundedWallets  = wallets.filter((w) => Number(w.balance ?? 0) > 0);

  return (
    <div className="flex flex-col gap-6">
      {/* Illustration hero */}
      <div className="flex flex-col items-center gap-3 text-center py-2">
        <IllustrationPortfolio />
        <div>
          <h2 className="text-2xl font-bold text-white">Your Portfolio</h2>
          <p className="text-sm text-gray-400 mt-1">Track your crypto holdings and performance.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Balance', value: `$${Number(totalBalance).toLocaleString('en-US', { minimumFractionDigits: 2 })}` },
          { label: '24h Change',    value: `${change24h >= 0 ? '+' : ''}${Number(change24h).toFixed(2)}%`, accent: change24h >= 0 ? 'text-green-400' : 'text-red-400' },
          { label: 'Total Assets',  value: String(fundedWallets.length) },
        ].map(({ label, value, accent }) => (
          <div key={label} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{label}</p>
            <p className={`text-2xl font-bold ${accent || 'text-white'}`}>{loading ? '—' : value}</p>
          </div>
        ))}
      </div>

      {/* Holdings */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-2">
          <h3 className="text-base font-semibold text-white">Holdings</h3>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-green-400">LIVE</span>
          </span>
        </div>
        {loading ? (
          <div className="py-10 text-center text-gray-500 text-sm">Loading…</div>
        ) : fundedWallets.length === 0 ? (
          <div className="py-10 text-center text-gray-500 text-sm">No holdings yet. Deposit or receive crypto to get started.</div>
        ) : (
          <div className="divide-y divide-gray-800">
            {fundedWallets.map((w, i) => (
              <div key={w._id ?? i} className="flex items-center justify-between px-5 py-4 hover:bg-gray-800/30 transition-colors">
                <div className="flex items-center gap-3">
                  <CoinAvatar symbol={w.symbol} name={w.name} image={w.image} />
                  <div>
                    <p className="text-sm font-semibold text-white">{w.name ?? w.symbol}</p>
                    <p className="text-xs text-gray-500">{w.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">
                    {Number(w.balance ?? 0).toLocaleString(undefined, { maximumFractionDigits: 8 })} <span className="text-gray-500 font-normal text-xs">{w.symbol}</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    ${Number(w.usdValue ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    {w.price > 0 && <span className="ml-1 text-gray-600">@ ${Number(w.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
