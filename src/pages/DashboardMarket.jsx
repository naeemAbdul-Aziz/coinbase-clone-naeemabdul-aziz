import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/ui/Loader';

const TABS = ['All Coins', 'Top Gainers', 'New Listings'];

const CryptoTable = ({ coins, loading }) => {
  if (loading) return <Loader fullScreen={false} />;
  if (!coins || !coins.length) return <p className="text-gray-400 py-6 text-sm">No data available.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b border-gray-800">
            <th className="text-left py-3 pr-4 font-semibold">#</th>
            <th className="text-left py-3 pr-4 font-semibold">Asset</th>
            <th className="text-right py-3 pr-4 font-semibold">Price</th>
            <th className="text-right py-3 font-semibold">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((c, i) => (
            <tr key={c._id ?? i} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
              <td className="py-3 pr-4 text-gray-500">{i + 1}</td>
              <td className="py-3 pr-4">
                <div className="flex items-center gap-3">
                  {c.image ? (
                    <img src={c.image} alt={c.symbol} className="w-7 h-7 rounded-full" onError={(e) => { e.target.style.display = 'none'; }} />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-xs font-bold">
                      {(c.symbol ?? '?')[0]}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-white">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 pr-4 text-right font-medium text-white">
                ${Number(c.price ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
              </td>
              <td className={`py-3 text-right font-semibold ${(c.change24h ?? 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {(c.change24h ?? 0) >= 0 ? '+' : ''}{Number(c.change24h ?? 0).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function DashboardMarket() {
  const [activeTab, setActiveTab] = useState(0);
  const [allCoins, setAllCoins] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([api.get('/crypto'), api.get('/crypto/gainers'), api.get('/crypto/new')])
      .then(([all, g, n]) => {
        setAllCoins(all.data.coins ?? all.data.cryptos ?? all.data);
        setGainers(g.data.coins ?? g.data.cryptos ?? g.data);
        setNewListings(n.data.coins ?? n.data.cryptos ?? n.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const tabCoins = [allCoins, gainers, newListings][activeTab];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-white">Crypto Market</h2>
        <p className="text-sm text-gray-400 mt-0.5">Live cryptocurrency prices and market data.</p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 lg:p-6">
        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-gray-800/60 rounded-xl mb-5 w-full sm:w-auto sm:inline-flex">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === i ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <CryptoTable coins={tabCoins} loading={loading} />
      </div>
    </div>
  );
}
