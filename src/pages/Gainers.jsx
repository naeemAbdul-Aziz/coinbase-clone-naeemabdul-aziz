import { useEffect, useState } from 'react';
import api from '../services/api';
import { IllustrationGainers } from '../components/ui/FigmaIllustrations';

export default function Gainers() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGainers = () => {
    api.get('/crypto/gainers')
      .then((r) => setCoins(r.data.coins ?? r.data.cryptos ?? r.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchGainers();
    const interval = setInterval(fetchGainers, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Illustration hero */}
      <div className="flex flex-col items-center gap-3 text-center py-2">
        <IllustrationGainers />
        <div>
          <h2 className="text-2xl font-bold text-white">Top Gainers</h2>
          <p className="text-sm text-gray-400 mt-1">Best performing assets in the last 24 hours.</p>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
        {loading ? (
          <div className="py-10 text-center text-gray-500 text-sm">Loading…</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b border-gray-800">
                  <th className="text-left px-4 py-3 font-semibold">#</th>
                  <th className="text-left px-4 py-3 font-semibold">Asset</th>
                  <th className="text-right px-4 py-3 font-semibold">Price</th>
                  <th className="text-right px-4 py-3 font-semibold">24h Change</th>
                </tr>
              </thead>
              <tbody>
                {coins.length ? coins.map((c, i) => (
                  <tr key={c._id ?? i} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td className="py-3 px-4 text-gray-500 text-sm">{i + 1}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        {c.image
                          ? <img src={c.image} alt={c.symbol} className="w-7 h-7 rounded-full" onError={(e) => { e.target.style.display = 'none'; }} />
                          : <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">{(c.symbol ?? '?')[0]}</div>
                        }
                        <div>
                          <p className="text-sm font-semibold text-white">{c.name}</p>
                          <p className="text-xs text-gray-500">{c.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-white">
                      ${Number(c.price ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                    </td>
                    <td className="py-3 px-4 text-right text-sm font-semibold text-green-400">
                      +{Number(c.change24h ?? 0).toFixed(2)}%
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={4} className="text-center py-10 text-gray-500 text-sm">No gainers data.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
