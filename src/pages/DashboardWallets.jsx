import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/ui/Loader';

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
  </svg>
);

export default function DashboardWallets() {
  const [wallets, setWallets] = useState([]);
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.get('/wallet/balances'), api.get('/wallet/portfolio')])
      .then(([w, p]) => {
        setWallets(w.data.wallets ?? []);
        setPortfolio(p.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader fullScreen={false} />;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-white">Wallets</h2>
        <p className="text-sm text-gray-400 mt-0.5">Your crypto balances and portfolio overview.</p>
      </div>

      {/* Portfolio summary */}
      {portfolio && (
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 lg:p-6">
          <h3 className="text-base font-semibold text-white mb-4">Portfolio Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700">
              <p className="text-xs text-gray-500 mb-1">Total Balance</p>
              <p className="text-xl font-bold text-white">${Number(portfolio.totalBalance ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700">
              <p className="text-xs text-gray-500 mb-1">24h Change</p>
              <p className={`text-xl font-bold ${portfolio.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolio.change24h >= 0 ? '+' : ''}{Number(portfolio.change24h ?? 0).toFixed(2)}%
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700">
              <p className="text-xs text-gray-500 mb-1">Assets</p>
              <p className="text-xl font-bold text-white">{wallets.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Wallets list */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 lg:p-6">
        <h3 className="text-base font-semibold text-white mb-4">Your Wallets</h3>
        {wallets.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 mb-3">
              <WalletIcon />
            </div>
            <p className="text-gray-400 text-sm">No wallets found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wallets.map((w, i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-800/60 border border-gray-700 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {w.image ? (
                    <img src={w.image} alt={w.symbol} className="w-8 h-8 rounded-full" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-xs font-bold">
                      {(w.symbol ?? '?')[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">{w.name ?? w.symbol}</p>
                    <p className="text-xs text-gray-500">{w.symbol}</p>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-lg font-bold text-white">{Number(w.balance ?? 0).toLocaleString()}</p>
                  <p className="text-xs text-gray-500">${Number(w.usdValue ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
