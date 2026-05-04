import { useRef, useEffect, useCallback, useState } from 'react';
import { Shell, BlueBtn } from './SignupUI';

const StepVerifyEmail = ({ email, onVerify, onResend, error, loading }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const refs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const focusAt = useCallback((i) => refs.current[i]?.focus(), []);

  const submitCode = (c) => {
    if (c.every((d) => d)) onVerify(c.join(''));
  };

  const handleChange = (i, v) => {
    if (v && !/^\d$/.test(v)) return;
    const c = [...code]; c[i] = v; setCode(c);
    if (v && i < 5) focusAt(i + 1);
    submitCode(c);
  };

  const handleKey = (i, e) => { if (e.key === 'Backspace' && !code[i] && i > 0) focusAt(i - 1); };

  const handlePaste = (e) => {
    e.preventDefault();
    const p = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const c = [...code]; for (let i = 0; i < 6; i++) c[i] = p[i] || ''; setCode(c);
    focusAt(Math.min(p.length, 5));
    submitCode(c);
  };

  const handleResend = () => {
    if (timer > 0) return;
    setTimer(30);
    setCode(['', '', '', '', '', '']);
    onResend?.();
  };

  return (
    <Shell>
      <h1 className="text-[1.75rem] font-bold text-white mb-2">Enter the code we emailed you</h1>
      <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
        Check your email <span className="font-semibold text-white">{email}</span>.
        This helps us keep your account secure by verifying that it&apos;s really you.
      </p>
      <p className="text-[0.875rem] font-semibold text-white mb-3">Enter 6-digit code</p>
      <div className="flex gap-3 mb-4">
        {code.map((d, i) => (
          <input key={i} ref={(el) => (refs.current[i] = el)} type="text" inputMode="numeric" maxLength={1}
            value={d} onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKey(i, e)}
            onPaste={i === 0 ? handlePaste : undefined}
            className={`w-12 h-14 text-center text-xl font-semibold rounded-xl border bg-[#1E2025] text-white outline-none transition-colors ${d ? 'border-[#0052FF]' : 'border-[#2C2F36]'} focus:border-[#0052FF]`}
          />
        ))}
      </div>
      {error && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}
      {loading && <p className="text-[#8A919E] text-sm mb-4">Verifying…</p>}
      <button onClick={handleResend} disabled={timer > 0}
        className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors mb-6 ${timer > 0 ? 'bg-[#1E2025] text-[#5B616E] cursor-not-allowed' : 'bg-[#0052FF] hover:bg-[#1a5cff] text-white cursor-pointer'}`}>
        {timer > 0 ? `Resend code in ${timer}s` : 'Resend code'}
      </button>
      <p className="text-center text-[0.875rem] text-white">
        Can&apos;t access?{' '}<a href="#" className="text-[#0052FF] hover:underline font-medium">Update your 2FA</a>
      </p>
    </Shell>
  );
};

export default StepVerifyEmail;
