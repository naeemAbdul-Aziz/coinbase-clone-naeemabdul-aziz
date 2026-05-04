import { useState, useEffect } from 'react';
import api from '../services/api';
import { SwapIcon } from '../components/ui/icons/CdsIcons';
import { IllustrationSwap } from '../components/ui/FigmaIllustrations';

const selectCls = 'w-full h-14 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm outline-none focus:border-[#2752E7] transition-colors appearance-none cursor-pointer';
const inputCls  = 'w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#2752E7] transition-colors';

export default function Swap() {
  const [wallets, setWallets]   = useState([]);
  const [walletsLoading, setWalletsLoading] = useState(true);
  const [form, setForm]         = useState({ from: '', to: '', amount: '' });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState('');

  useEffect(() => {
    api.get('/wallet/balances')
      .then((r) => {
        const list = r.data.wallets ?? r.data ?? [];
        setWallets(list);
        if (list.length > 0) setForm((f) => ({ ...f, from: list[0].symbol }));
        if (list.length > 1) setForm((f) => ({ ...f, to:   list[1].symbol }));
      })
      .catch(() => {})
      .finally(() => setWalletsLoading(false));
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const flipCoins = () => setForm((f) => ({ ...f, from: f.to, to: f.from }));

  const fromWallet = wallets.find((w) => w.symbol === form.from);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.from === form.to) { setError('Cannot swap a currency with itself.'); return; }
    setError(''); setSuccess(''); setLoading(true);
    try {
      const res = await api.post('/swap/execute', {
        fromAsset:  form.from.toUpperCase(),
        toAsset:    form.to.toUpperCase(),
        fromAmount: parseFloat(form.amount),
      });
      const q = res.data.quote;
      setSuccess(`Swapped ${q.fromAmount} ${q.fromAsset} → ${q.toAmount} ${q.toAsset} (fee $${q.feeUsd})`);
      setForm((f) => ({ ...f, amount: '' }));
      // Refresh wallet balances
      api.get('/wallet/balances').then((r) => {
        const list = r.data.wallets ?? r.data ?? [];
        setWallets(list);
      }).catch(() => {});
    } catch (err) {
      const d = err.response?.data;
      setError(d?.message || 'Swap failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full py-4">
      {/* Illustration */}
      <div className="flex flex-col items-center gap-3 text-center">
        <IllustrationSwap />
        <div>
          <h2 className="text-2xl font-bold text-white">Swap Crypto</h2>
          <p className="text-sm text-gray-400 mt-1">Exchange one cryptocurrency for another instantly.</p>
        </div>
      </div>

      {/* Form card */}
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-full bg-[#2752E7] flex items-center justify-center shadow-md">
            <SwapIcon size={16} color="#ffffff" />
          </div>
          <span className="text-sm font-semibold text-white">Swap Exchange</span>
        </div>

        {walletsLoading ? (
          <div className="py-8 text-center text-gray-500 text-sm">Loading your wallets…</div>
        ) : wallets.length === 0 ? (
          <div className="py-8 text-center text-gray-500 text-sm">No currencies in your wallet yet.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* FROM */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">From</label>
              <div className="relative">
                <select className={selectCls} value={form.from} onChange={set('from')} required>
                  {wallets.map((w) => (
                    <option key={w.symbol} value={w.symbol}>
                      {w.name ?? w.symbol} ({w.symbol}) — {Number(w.balance ?? 0).toLocaleString()} available
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10z"/></svg>
                </div>
              </div>
              {fromWallet && (
                <p className="text-xs text-gray-500 mt-1 pl-1">
                  Balance: <span className="text-white font-medium">{Number(fromWallet.balance ?? 0).toLocaleString()} {fromWallet.symbol}</span>
                  {fromWallet.usdValue != null && (
                    <span className="ml-2 text-gray-500">≈ ${Number(fromWallet.usdValue).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  )}
                </p>
              )}
            </div>

            {/* Flip button */}
            <div className="flex items-center justify-center">
              <button type="button" onClick={flipCoins}
                className="w-10 h-10 rounded-full bg-[#2752E7] flex items-center justify-center shadow-lg shadow-[#2752E7]/30 hover:bg-[#1a3fd6] transition-colors">
                <SwapIcon size={18} color="#ffffff" />
              </button>
            </div>

            {/* TO */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">To</label>
              <div className="relative">
                <select className={selectCls} value={form.to} onChange={set('to')} required>
                  <option value="">Select currency…</option>
                  {wallets.map((w) => (
                    <option key={w.symbol} value={w.symbol} disabled={w.symbol === form.from}>
                      {w.name ?? w.symbol} ({w.symbol})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10z"/></svg>
                </div>
              </div>
            </div>

            {/* AMOUNT */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Amount</label>
              <div className="relative">
                <input className={`${inputCls} pr-16`} type="number" step="any" min="0"
                  placeholder="0.00" value={form.amount} onChange={set('amount')} required />
                {form.from && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 pointer-events-none">
                    {form.from}
                  </span>
                )}
              </div>
              {fromWallet && (
                <button type="button"
                  onClick={() => setForm((f) => ({ ...f, amount: String(fromWallet.balance ?? '') }))}
                  className="text-[10px] text-[#2752E7] hover:text-blue-400 font-semibold mt-1 pl-1 transition-colors">
                  Use max ({Number(fromWallet.balance ?? 0).toLocaleString()} {fromWallet.symbol})
                </button>
              )}
              {/* Remaining balance preview */}
              {fromWallet && form.amount && !isNaN(parseFloat(form.amount)) && (() => {
                const remaining = Number(fromWallet.balance ?? 0) - parseFloat(form.amount);
                const isOver = remaining < 0;
                return (
                  <div className={`mt-2 px-3 py-2 rounded-xl text-xs flex items-center justify-between
                    ${isOver ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-gray-800/60 border border-gray-700 text-gray-400'}`}>
                    <span>Remaining after swap</span>
                    <span className={`font-semibold ${isOver ? 'text-red-400' : 'text-white'}`}>
                      {isOver ? '⚠ Insufficient' : `${remaining.toLocaleString(undefined, { maximumFractionDigits: 8 })} ${fromWallet.symbol}`}
                    </span>
                  </div>
                );
              })()}
            </div>

            {error   && <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
            {success && <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">{success}</div>}

            <button type="submit" disabled={loading || !form.from || !form.to || form.from === form.to}
              className="h-11 rounded-xl bg-[#2752E7] hover:bg-[#1a3fd6] disabled:opacity-50 text-white font-semibold text-sm transition-colors mt-1 shadow-lg shadow-[#2752E7]/20">
              {loading ? 'Swapping…' : `Swap ${form.from || '—'} → ${form.to || '—'}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
