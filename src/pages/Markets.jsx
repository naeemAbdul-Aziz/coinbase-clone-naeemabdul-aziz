import { useEffect, useState } from 'react';
import api from '../services/api';

const inputCls = 'w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#0052FF] transition-colors';

const AddCryptoForm = ({ onAdded }) => {
  const [form, setForm] = useState({ name: '', symbol: '', price: '', image: '', change24h: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setSuccess(''); setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        symbol: form.symbol.trim().toUpperCase(),
        price: parseFloat(form.price),
        image: form.image.trim() || undefined,
        change24h: form.change24h !== '' ? parseFloat(form.change24h) : undefined,
      };
      const { data } = await api.post('/crypto', payload);
      const newCoin = data.coin ?? data.crypto ?? data;
      setSuccess(`${newCoin.name} added successfully!`);
      setForm({ name: '', symbol: '', price: '', image: '', change24h: '' });
      onAdded(newCoin);
    } catch (err) {
      const d = err.response?.data;
      setError(d?.errors?.length ? d.errors.map((e) => e.msg).join(' · ') : d?.message || 'Failed to add crypto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Name *</label>
        <input className={inputCls} placeholder="Bitcoin" value={form.name} onChange={set('name')} required />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Symbol *</label>
        <input className={inputCls} placeholder="BTC" value={form.symbol} onChange={set('symbol')} required />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Price (USD) *</label>
        <input className={inputCls} type="number" step="any" placeholder="45000" value={form.price} onChange={set('price')} required />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-400 mb-1.5">24h Change (%)</label>
        <input className={inputCls} type="number" step="any" placeholder="2.5" value={form.change24h} onChange={set('change24h')} />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Image URL or data:image/…</label>
        <input className={inputCls} placeholder="https://... or data:image/..." value={form.image} onChange={set('image')} />
      </div>
      {error && <div className="sm:col-span-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      {success && <div className="sm:col-span-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">{success}</div>}
      <div className="sm:col-span-2">
        <button type="submit" disabled={loading}
          className="w-full h-11 rounded-xl bg-[#0052FF] hover:bg-[#1a5cff] disabled:opacity-50 text-white font-semibold text-sm transition-colors">
          {loading ? 'Adding…' : 'Add Cryptocurrency'}
        </button>
      </div>
    </form>
  );
};

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

export default function Markets() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const fetchCoins = () => {
    api.get('/crypto')
      .then((r) => setCoins(r.data.coins ?? r.data.cryptos ?? r.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">Markets</h2>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-green-400">LIVE</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-0.5">All listed cryptocurrencies.</p>
        </div>
        <button onClick={() => setShowForm((v) => !v)}
          className="px-4 py-2 rounded-xl bg-[#0052FF] hover:bg-[#1a5cff] text-white text-sm font-semibold transition-colors">
          {showForm ? 'Cancel' : '+ Add Crypto'}
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 lg:p-6">
          <h3 className="text-base font-semibold text-white mb-5">Add New Cryptocurrency</h3>
          <AddCryptoForm onAdded={(c) => { setCoins((prev) => [c, ...prev]); setShowForm(false); }} />
        </div>
      )}

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="py-10 text-center text-gray-500 text-sm">Loading…</div>
          ) : (
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
                {coins.length ? coins.map((c, i) => <CoinRow key={c._id ?? i} coin={c} rank={i + 1} />) : (
                  <tr><td colSpan={4} className="text-center py-10 text-gray-500 text-sm">No cryptocurrencies yet.</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
