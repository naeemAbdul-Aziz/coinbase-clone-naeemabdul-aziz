import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shell, BlueBtn, DarkInput, GoogleIcon, AppleIcon } from './SignupUI';

const StepEmail = ({ email, setEmail, name, setName, password, setPassword, onNext, error }) => {
  const [confirm, setConfirm] = useState('');
  const [localError, setLocalError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');
    if (!name.trim() || !email.trim() || !password.trim()) return;
    if (password.length < 8) { setLocalError('Password must be at least 8 characters'); return; }
    if (password !== confirm) { setLocalError('Passwords do not match'); return; }
    onNext();
  };

  return (
  <Shell>
    <form onSubmit={handleSubmit}>
      <h1 className="text-[1.75rem] font-bold text-white mb-2">Create your account</h1>
      <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
        Access all that Coinbase has to offer with a single account.
      </p>
      <DarkInput label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
      <DarkInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" />
      <DarkInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters" />
      <DarkInput label="Confirm Password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat your password" />
      {(localError || error) && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {localError || error}
        </div>
      )}
      <BlueBtn type="submit">Continue</BlueBtn>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#2C2F36]" />
        <span className="text-[0.75rem] font-semibold text-[#5B616E] tracking-wider">OR</span>
        <div className="flex-1 h-px bg-[#2C2F36]" />
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
          <GoogleIcon /> Sign up with Google
        </button>
        <button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
          <AppleIcon /> Sign up with Apple
        </button>
      </div>

      <p className="text-center text-[0.875rem] text-[#5B616E] mb-4">
        Already have an account?{' '}
        <Link to="/signin" className="text-[#0052FF] hover:underline font-medium">Sign in</Link>
      </p>
      <p className="text-center text-[0.75rem] text-[#5B616E] leading-5">
        By creating an account you certify that you are over the age of 18 and agree to our{' '}
        <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and{' '}
        <a href="#" className="underline hover:text-white transition-colors">Cookie Policy</a>.
      </p>
    </form>
  </Shell>
  );
};

export default StepEmail;
