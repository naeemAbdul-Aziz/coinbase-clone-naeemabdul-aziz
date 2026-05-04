import { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { AddCryptoIcon, ReceiveIcon, SwapIcon } from '../components/ui/icons/CdsIcons';

const CoinAvatar = ({ symbol, name, image, size = 9 }) => {
  const [imgOk, setImgOk] = useState(true);
  const letter = (symbol ?? name ?? '?')[0].toUpperCase();
  return (
    <div className={`w-${size} h-${size} rounded-full relative flex-shrink-0`}>
      {image && imgOk
        ? <img src={image} alt={symbol} className="w-full h-full rounded-full object-cover"
            onError={() => setImgOk(false)} />
        : <div className={`w-${size} h-${size} rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] font-bold text-xs`}>
            {letter}
          </div>
      }
    </div>
  );
};

const StatCard = ({ label, value, sub, accent }) => (
  <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 flex flex-col gap-1">
    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
    <p className={`text-2xl font-bold ${accent || 'text-white'}`}>{value}</p>
    {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
  </div>
);

const CoinRow = ({ coin, rank }) => (
  <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
    <td className="py-3 px-4 text-gray-500 text-sm">{rank}</td>
    <td className="py-3 px-4">
      <div className="flex items-center gap-3">
        {coin.image
          ? <img src={coin.image} alt={coin.symbol} className="w-7 h-7 rounded-full" onError={(e) => { e.target.style.display = 'none'; }} />
          : <div className="w-7 h-7 rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-xs font-bold">{(coin.symbol ?? '?')[0]}</div>
        }
        <div>
          <p className="text-sm font-semibold text-white">{coin.name}</p>
          <p className="text-xs text-gray-500">{coin.symbol}</p>
        </div>
      </div>
    </td>
    <td className="py-3 px-4 text-right text-sm font-medium text-white">
      ${Number(coin.price ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
    </td>
    <td className={`py-3 px-4 text-right text-sm font-semibold ${(coin.change24h ?? 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
      {(coin.change24h ?? 0) >= 0 ? '+' : ''}{Number(coin.change24h ?? 0).toFixed(2)}%
    </td>
  </tr>
);

const inputCls = 'w-full h-10 px-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#0052FF] transition-colors';

export default function Dashboard() {
  const { user } = useAuth();
  const [portfolio, setPortfolio] = useState(null);
  const [wallets, setWallets]     = useState([]);
  const [coins, setCoins]         = useState([]);
  const [txns, setTxns]           = useState([]);
  const [loading, setLoading]     = useState(true);

  const [addForm, setAddForm]     = useState({ name: '', symbol: '', price: '', change24h: '' });
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError]   = useState('');
  const [addSuccess, setAddSuccess] = useState('');
  const setAdd = (k) => (e) => setAddForm((f) => ({ ...f, [k]: e.target.value }));

  const fetchAll = useCallback(() => {
    Promise.allSettled([
      api.get('/wallet/portfolio'),
      api.get('/wallet/balances'),
      api.get('/crypto'),
      api.get('/transactions'),
    ]).then(([port, bal, cry, tx]) => {
      if (port.status === 'fulfilled') setPortfolio(port.value.data);
      if (bal.status === 'fulfilled')  setWallets(bal.value.data.wallets ?? bal.value.data ?? []);
      if (cry.status === 'fulfilled')  setCoins((cry.value.data.coins ?? cry.value.data.cryptos ?? cry.value.data).slice(0, 5));
      if (tx.status === 'fulfilled')   setTxns((tx.value.data.transactions ?? tx.value.data).slice(0, 5));
    }).finally(() => setLoading(false));
  }, []);

  const fetchAllRef = useRef(fetchAll);
  useEffect(() => { fetchAllRef.current = fetchAll; }, [fetchAll]);

  useEffect(() => {
    fetchAllRef.current();
    const interval = setInterval(() => fetchAllRef.current(), 30_000);
    return () => clearInterval(interval);
  }, []);

  const handleAddCrypto = async (e) => {
    e.preventDefault();
    setAddError(''); setAddSuccess(''); setAddLoading(true);
    try {
      const payload = {
        name:      addForm.name.trim(),
        symbol:    addForm.symbol.trim().toUpperCase(),
        price:     parseFloat(addForm.price),
        change24h: addForm.change24h !== '' ? parseFloat(addForm.change24h) : undefined,
      };
      const { data } = await api.post('/crypto', payload);
      const coin = data.coin ?? data.crypto ?? data;
      setAddSuccess(`${coin.name} (${coin.symbol}) added!`);
      setAddForm({ name: '', symbol: '', price: '', change24h: '' });
      setCoins((prev) => [coin, ...prev].slice(0, 5));
    } catch (err) {
      const d = err.response?.data;
      setAddError(d?.errors?.length ? d.errors.map((e) => e.msg).join(' · ') : d?.message || 'Failed.');
    } finally {
      setAddLoading(false);
    }
  };

  const fundedWallets = wallets.filter((w) => Number(w.balance ?? 0) > 0);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const firstName = user?.name?.split(' ')[0] || 'there';

  return (
    <div className="flex flex-col gap-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-white">{greeting}, {firstName}</h1>
        <p className="text-sm text-gray-400 mt-0.5">Here is what is happening with your portfolio today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Total Balance"
          value={loading ? '—' : `$${Number(portfolio?.totalBalance ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          sub="Across all wallets"
        />
        <StatCard
          label="24h Change"
          value={loading ? '—' : `${(portfolio?.change24h ?? 0) >= 0 ? '+' : ''}${Number(portfolio?.change24h ?? 0).toFixed(2)}%`}
          accent={(portfolio?.change24h ?? 0) >= 0 ? 'text-green-400' : 'text-red-400'}
          sub="Since yesterday"
        />
        <StatCard
          label="Assets"
          value={loading ? '—' : String(fundedWallets.length)}
          sub="Unique holdings"
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="flex items-end justify-center gap-4">
          {/* Add Crypto */}
          <Link to="/dashboard/send"
            className="flex flex-col items-center gap-2 flex-1 p-4 rounded-2xl border border-gray-800 bg-gray-900/60 hover:border-gray-600 transition-all group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10">
              <AddCryptoIcon size={20} color="#3b82f6" />
            </div>
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">Add Crypto</span>
          </Link>

          {/* Swap — raised blue circle */}
          <Link to="/dashboard/swap"
            className="flex flex-col items-center gap-2 relative -top-3 group">
            <div className="w-[52px] h-[52px] rounded-full bg-[#2752E7] flex items-center justify-center shadow-lg shadow-[#2752E7]/40 hover:bg-[#1a3fd6] transition-colors">
              <SwapIcon size={22} color="#ffffff" />
            </div>
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">Swap</span>
          </Link>

          {/* Receive */}
          <Link to="/dashboard/receive"
            className="flex flex-col items-center gap-2 flex-1 p-4 rounded-2xl border border-gray-800 bg-gray-900/60 hover:border-gray-600 transition-all group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10">
              <ReceiveIcon size={20} color="#22c55e" />
            </div>
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">Receive</span>
          </Link>
        </div>
      </div>

      {/* My Wallet Balances */}
      {!loading && fundedWallets.length > 0 && (
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">My Wallets</h2>
            <Link to="/dashboard/portfolio" className="text-xs text-[#0052FF] hover:text-blue-400 font-semibold transition-colors">View all</Link>
          </div>
          <div className="divide-y divide-gray-800">
            {fundedWallets.slice(0, 5).map((w, i) => (
              <div key={w.symbol ?? i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-800/30 transition-colors">
                <div className="flex items-center gap-3">
                  <CoinAvatar symbol={w.symbol} name={w.name} image={w.image} size={8} />
                  <div>
                    <p className="text-sm font-semibold text-white">{w.name ?? w.symbol}</p>
                    <p className="text-xs text-gray-500">{w.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">
                    {Number(w.balance ?? 0).toLocaleString(undefined, { maximumFractionDigits: 8 })}
                    <span className="text-gray-500 font-normal text-xs ml-1">{w.symbol}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    ${Number(w.usdValue ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    {w.price > 0 && <span className="ml-1 text-gray-600">@ ${Number(w.price).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Cryptocurrency */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-2">
          <AddCryptoIcon size={16} color="#0052FF" />
          <h2 className="text-base font-semibold text-white">Add New Cryptocurrency</h2>
        </div>
        <div className="p-5">
          <form onSubmit={handleAddCrypto} className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Name *</label>
              <input className={inputCls} placeholder="Bitcoin" value={addForm.name} onChange={setAdd('name')} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Symbol *</label>
              <input className={inputCls} placeholder="BTC" value={addForm.symbol} onChange={setAdd('symbol')} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Price (USD) *</label>
              <input className={inputCls} type="number" step="any" min="0" placeholder="45000" value={addForm.price} onChange={setAdd('price')} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">24h Change (%)</label>
              <input className={inputCls} type="number" step="any" placeholder="2.5" value={addForm.change24h} onChange={setAdd('change24h')} />
            </div>
            {addError   && <div className="col-span-2 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">{addError}</div>}
            {addSuccess && <div className="col-span-2 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs">{addSuccess}</div>}
            <div className="col-span-2">
              <button type="submit" disabled={addLoading}
                className="w-full h-10 rounded-xl bg-[#0052FF] hover:bg-[#1a5cff] disabled:opacity-50 text-white font-semibold text-sm transition-colors">
                {addLoading ? 'Adding…' : '+ Add to Market'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Crypto Market */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-white">Crypto Market</h2>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-green-400">LIVE</span>
            </span>
          </div>
          <Link to="/dashboard/markets" className="text-xs text-[#0052FF] hover:text-blue-400 font-semibold transition-colors">View all</Link>
        </div>
        {loading ? (
          <div className="py-10 text-center text-gray-500 text-sm">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b border-gray-800">
                  <th className="text-left px-4 py-3 font-semibold">#</th>
                  <th className="text-left px-4 py-3 font-semibold">Asset</th>
                  <th className="text-right px-4 py-3 font-semibold">Price</th>
                  <th className="text-right px-4 py-3 font-semibold">24h</th>
                </tr>
              </thead>
              <tbody>
                {coins.length ? coins.map((c, i) => <CoinRow key={c._id ?? i} coin={c} rank={i + 1} />) : (
                  <tr><td colSpan={4} className="text-center py-8 text-gray-500 text-sm">No data available.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <h2 className="text-base font-semibold text-white">Recent Transactions</h2>
        </div>
        {loading ? (
          <div className="py-10 text-center text-gray-500 text-sm">Loading...</div>
        ) : txns.length === 0 ? (
          <div className="py-10 text-center text-gray-500 text-sm">No transactions yet.</div>
        ) : (
          <ul className="divide-y divide-gray-800">
            {txns.map((t, i) => (
              <li key={t._id ?? i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-800/30 transition-colors">
                <div>
                  <p className="text-sm font-medium text-white capitalize">{t.type ?? 'Transfer'}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.createdAt ? new Date(t.createdAt).toLocaleDateString() : '—'}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${t.type === 'receive' ? 'text-green-400' : 'text-white'}`}>
                    {t.type === 'receive' ? '+' : ''}{t.amount} {t.symbol ?? ''}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 capitalize">{t.status ?? 'completed'}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
