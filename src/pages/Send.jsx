import { useState } from 'react';
import api from '../services/api';
import { AddCryptoIcon } from '../components/ui/icons/CdsIcons';
import { IllustrationMarkets } from '../components/ui/FigmaIllustrations';

const inputCls = 'w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#0052FF] transition-colors';

export default function AddCrypto() {
  const [form, setForm] = useState({ name: '', symbol: '', price: '', change24h: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setSuccess(''); setLoading(true);
    try {
      const payload = {
        name:      form.name.trim(),
        symbol:    form.symbol.trim().toUpperCase(),
        price:     parseFloat(form.price),
        image:     form.image.trim() || undefined,
        change24h: form.change24h !== '' ? parseFloat(form.change24h) : undefined,
      };
      const { data } = await api.post('/crypto', payload);
      const coin = data.coin ?? data.crypto ?? data;
      setSuccess(`${coin.name} (${coin.symbol}) added to the market!`);
      setForm({ name: '', symbol: '', price: '', change24h: '', image: '' });
    } catch (err) {
      const d = err.response?.data;
      setError(d?.errors?.length ? d.errors.map((e) => e.msg).join(' · ') : d?.message || 'Failed to add. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full py-4">
      {/* Illustration */}
      <div className="flex flex-col items-center gap-3 text-center">
        <IllustrationMarkets />
        <div>
          <h2 className="text-2xl font-bold text-white">Add Cryptocurrency</h2>
          <p className="text-sm text-gray-400 mt-1">List a new cryptocurrency on the market.</p>
        </div>
      </div>

      {/* Form card */}
      <div className="w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-full bg-[#0052FF]/20 flex items-center justify-center">
            <AddCryptoIcon size={16} color="#0052FF" />
          </div>
          <span className="text-sm font-semibold text-white">New Cryptocurrency</span>
        </div>
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
            <input className={inputCls} type="number" step="any" min="0" placeholder="45000" value={form.price} onChange={set('price')} required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">24h Change (%)</label>
            <input className={inputCls} type="number" step="any" placeholder="2.5" value={form.change24h} onChange={set('change24h')} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Image URL <span className="text-gray-600 font-normal">(optional)</span></label>
            <input className={inputCls} placeholder="https://..." value={form.image} onChange={set('image')} />
          </div>
          {error   && <div className="sm:col-span-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
          {success && <div className="sm:col-span-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">{success}</div>}
          <div className="sm:col-span-2">
            <button type="submit" disabled={loading}
              className="w-full h-11 rounded-xl bg-[#0052FF] hover:bg-[#1a5cff] disabled:opacity-50 text-white font-semibold text-sm transition-colors shadow-lg shadow-[#0052FF]/20">
              {loading ? 'Adding…' : 'Add to Market'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
