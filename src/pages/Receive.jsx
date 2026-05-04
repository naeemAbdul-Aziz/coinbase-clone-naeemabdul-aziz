import { useState, useEffect } from 'react';
import api from '../services/api';
import { ReceiveIcon } from '../components/ui/icons/CdsIcons';
import { IllustrationReceive } from '../components/ui/FigmaIllustrations';

const QRPlaceholder = () => (
  <div className="w-44 h-44 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg">
    <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-0.5">
      {Array.from({ length: 49 }).map((_, i) => {
        const corners = [0,1,2,3,4,5,6,7,13,14,20,21,27,28,34,35,41,42,43,44,45,46,48];
        const inner   = [8,9,10,11,12,15,19,22,26,29,33,36,37,38,39,40,47];
        return <div key={i} className={`rounded-[1px] ${corners.includes(i) ? 'bg-gray-900' : inner.includes(i) ? 'bg-gray-300' : 'bg-transparent'}`} />;
      })}
    </div>
  </div>
);

export default function Receive() {
  const [wallets, setWallets]   = useState([]);
  const [selected, setSelected] = useState('');
  const [loading, setLoading]   = useState(true);
  const [copied, setCopied]     = useState(false);

  useEffect(() => {
    api.get('/wallet/balances')
      .then((r) => {
        const list = r.data.wallets ?? r.data ?? [];
        setWallets(list);
        if (list.length > 0) setSelected(list[0].symbol);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const wallet  = wallets.find((w) => w.symbol === selected);
  const address = wallet?.address ?? '—';

  const copy = () => {
    if (address === '—') return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full py-4">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <IllustrationReceive />
        <div>
          <h2 className="text-2xl font-bold text-white">Receive Crypto</h2>
          <p className="text-sm text-gray-400 mt-1">Share your wallet address to receive assets.</p>
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900/60 p-6 flex flex-col items-center gap-5">
        <div className="flex items-center gap-2 self-start">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <ReceiveIcon size={16} color="#22c55e" />
          </div>
          <span className="text-sm font-semibold text-white">Your Wallet Address</span>
        </div>

        {/* Asset picker */}
        {loading ? (
          <div className="text-gray-500 text-sm py-4">Loading wallets…</div>
        ) : wallets.length === 0 ? (
          <div className="text-gray-500 text-sm py-4">No wallets found.</div>
        ) : (
          <>
            <div className="w-full">
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Select Asset</label>
              <div className="relative">
                <select
                  value={selected}
                  onChange={(e) => { setSelected(e.target.value); setCopied(false); }}
                  className="w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm outline-none focus:border-[#0052FF] transition-colors appearance-none cursor-pointer">
                  {wallets.map((w) => (
                    <option key={w.symbol} value={w.symbol}>
                      {w.name ?? w.symbol} ({w.symbol})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10z"/></svg>
                </div>
              </div>
            </div>

            <QRPlaceholder />

            <div className="w-full">
              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider text-center">
                {selected} Address
              </p>
              <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
                <p className="text-sm text-white font-mono flex-1 truncate">{address}</p>
                <button onClick={copy}
                  className={`text-xs font-semibold shrink-0 transition-colors ${copied ? 'text-green-400' : 'text-[#2752E7] hover:text-blue-400'}`}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              {wallet && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Current balance: <span className="text-white font-medium">{Number(wallet.balance).toLocaleString(undefined, { maximumFractionDigits: 8 })} {selected}</span>
                </p>
              )}
            </div>
          </>
        )}

        <p className="text-xs text-gray-500 text-center">Only send <span className="text-white font-medium">{selected}</span> to this address. Sending a different asset may result in permanent loss.</p>
      </div>
    </div>
  );
}
