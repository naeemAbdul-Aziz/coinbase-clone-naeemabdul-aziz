import { useState, useEffect } from 'react';
import api from '../services/api';
import { SendIcon } from '../components/ui/icons/CdsIcons';

const inputCls = 'w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#0052FF] transition-colors';
const selectCls = 'w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm outline-none focus:border-[#0052FF] transition-colors appearance-none cursor-pointer';

const FEE_RATE = 0.001;

export default function SendCrypto() {
  const [wallets, setWallets]     = useState([]);
  const [walletsLoading, setWL]   = useState(true);
  const [form, setForm]           = useState({ asset: '', toAddress: '', amount: '', note: '' });
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [success, setSuccess]     = useState('');

  useEffect(() => {
    api.get('/wallet/balances')
      .then((r) => {
        const list = (r.data.wallets ?? r.data ?? []).filter((w) => w.balance > 0);
        setWallets(list);
        if (list.length > 0) setForm((f) => ({ ...f, asset: list[0].symbol }));
      })
      .catch(() => {})
      .finally(() => setWL(false));
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const selectedWallet = wallets.find((w) => w.symbol === form.asset);
  const sendAmount     = parseFloat(form.amount) || 0;
  const fee            = parseFloat((sendAmount * FEE_RATE).toFixed(8));
  const total          = parseFloat((sendAmount + fee).toFixed(8));
  const remaining      = parseFloat(((selectedWallet?.balance ?? 0) - total).toFixed(8));
  const isInsufficient = sendAmount > 0 && remaining < 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isInsufficient) { setError('Insufficient balance.'); return; }
    setError(''); setSuccess(''); setLoading(true);
    try {
      const res = await api.post('/transactions/send', {
        asset:     form.asset,
        toAddress: form.toAddress.trim(),
        amount:    sendAmount,
        note:      form.note.trim() || undefined,
      });
      const d = res.data;
      setSuccess(`Sent ${d.sent} ${d.asset} successfully! Fee: ${d.fee} ${d.asset}`);
      setForm((f) => ({ ...f, toAddress: '', amount: '', note: '' }));
      // refresh balances
      api.get('/wallet/balances').then((r) => {
        const list = (r.data.wallets ?? r.data ?? []).filter((w) => w.balance > 0);
        setWallets(list);
      }).catch(() => {});
    } catch (err) {
      const d = err.response?.data;
      setError(d?.message || 'Send failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full py-4">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-16 h-16 rounded-full bg-[#0052FF]/10 flex items-center justify-center">
          <SendIcon size={32} color="#0052FF" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Send Crypto</h2>
          <p className="text-sm text-gray-400 mt-1">Transfer funds to another user's wallet address.</p>
        </div>
      </div>

      {/* Form card */}
      <div className="w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-full bg-[#0052FF]/20 flex items-center justify-center">
            <SendIcon size={15} color="#0052FF" />
          </div>
          <span className="text-sm font-semibold text-white">Send Transfer</span>
        </div>

        {walletsLoading ? (
          <div className="py-8 text-center text-gray-500 text-sm">Loading your wallets…</div>
        ) : wallets.length === 0 ? (
          <div className="py-8 text-center text-gray-500 text-sm">
            You have no funds to send. Receive crypto first to build a balance.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Asset select */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Asset</label>
              <div className="relative">
                <select className={selectCls} value={form.asset} onChange={set('asset')} required>
                  {wallets.map((w) => (
                    <option key={w.symbol} value={w.symbol}>
                      {w.name ?? w.symbol} ({w.symbol}) — {Number(w.balance).toLocaleString(undefined, { maximumFractionDigits: 8 })} available
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10z"/></svg>
                </div>
              </div>
              {selectedWallet && (
                <p className="text-xs text-gray-500 mt-1 pl-1">
                  Balance: <span className="text-white font-medium">{Number(selectedWallet.balance).toLocaleString(undefined, { maximumFractionDigits: 8 })} {selectedWallet.symbol}</span>
                  {selectedWallet.usdValue > 0 && <span className="ml-2">≈ ${Number(selectedWallet.usdValue).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>}
                </p>
              )}
            </div>

            {/* Recipient address */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Recipient Address</label>
              <input className={inputCls} placeholder="Paste wallet address…"
                value={form.toAddress} onChange={set('toAddress')} required />
              <p className="text-xs text-gray-600 mt-1 pl-1">Ask the recipient to copy their address from the Receive page.</p>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Amount</label>
              <div className="relative">
                <input className={`${inputCls} pr-16`} type="number" step="any" min="0"
                  placeholder="0.00" value={form.amount} onChange={set('amount')} required />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 pointer-events-none">
                  {form.asset}
                </span>
              </div>
              {selectedWallet && (
                <button type="button"
                  onClick={() => {
                    const maxSend = parseFloat(((selectedWallet.balance) / (1 + FEE_RATE)).toFixed(8));
                    setForm((f) => ({ ...f, amount: String(maxSend) }));
                  }}
                  className="text-[10px] text-[#0052FF] hover:text-blue-400 font-semibold mt-1 pl-1 transition-colors">
                  Use max
                </button>
              )}
            </div>

            {/* Summary */}
            {sendAmount > 0 && (
              <div className={`rounded-xl px-4 py-3 text-xs flex flex-col gap-1.5 border
                ${isInsufficient ? 'bg-red-500/10 border-red-500/20' : 'bg-gray-800/60 border-gray-700'}`}>
                <div className="flex justify-between text-gray-400">
                  <span>You send</span>
                  <span className="text-white font-medium">{sendAmount} {form.asset}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Network fee (0.1%)</span>
                  <span className="text-white font-medium">{fee} {form.asset}</span>
                </div>
                <div className={`flex justify-between font-semibold border-t pt-1.5 mt-0.5 ${isInsufficient ? 'border-red-500/20' : 'border-gray-700'}`}>
                  <span className={isInsufficient ? 'text-red-400' : 'text-gray-300'}>Remaining balance</span>
                  <span className={isInsufficient ? 'text-red-400' : 'text-green-400'}>
                    {isInsufficient ? '⚠ Insufficient' : `${remaining} ${form.asset}`}
                  </span>
                </div>
              </div>
            )}

            {/* Note */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Note <span className="text-gray-600 font-normal">(optional)</span></label>
              <input className={inputCls} placeholder="e.g. Payment for services"
                value={form.note} onChange={set('note')} />
            </div>

            {error   && <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
            {success && <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">{success}</div>}

            <button type="submit" disabled={loading || isInsufficient || !form.toAddress}
              className="h-11 rounded-xl bg-[#0052FF] hover:bg-[#1a5cff] disabled:opacity-50 text-white font-semibold text-sm transition-colors shadow-lg shadow-[#0052FF]/20">
              {loading ? 'Sending…' : `Send ${form.asset || 'Crypto'}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
