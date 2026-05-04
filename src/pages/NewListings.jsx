import { useEffect, useState } from 'react';
import api from '../services/api';
import { IllustrationNewListings } from '../components/ui/FigmaIllustrations';

export default function NewListings() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/crypto/new')
      .then((r) => setCoins(r.data.coins ?? r.data.cryptos ?? r.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Illustration hero */}
      <div className="flex flex-col items-center gap-3 text-center py-2">
        <IllustrationNewListings />
        <div>
          <h2 className="text-2xl font-bold text-white">New Listings</h2>
          <p className="text-sm text-gray-400 mt-1">Recently added cryptocurrencies to the market.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p className="text-gray-500 text-sm col-span-full py-6 text-center">Loading…</p>
        ) : coins.length === 0 ? (
          <p className="text-gray-500 text-sm col-span-full py-6 text-center">No new listings.</p>
        ) : coins.map((c, i) => (
          <div key={c._id ?? i} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {c.image
                ? <img src={c.image} alt={c.symbol} className="w-9 h-9 rounded-full" onError={(e) => { e.target.style.display = 'none'; }} />
                : <div className="w-9 h-9 rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-sm font-bold">{(c.symbol ?? '?')[0]}</div>
              }
              <div>
                <p className="text-sm font-semibold text-white">{c.name}</p>
                <p className="text-xs text-gray-500">{c.symbol}</p>
              </div>
              <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">NEW</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-white">
                ${Number(c.price ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
              </span>
              <span className={`text-sm font-semibold ${(c.change24h ?? 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {(c.change24h ?? 0) >= 0 ? '+' : ''}{Number(c.change24h ?? 0).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
