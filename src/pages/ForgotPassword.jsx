import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import { API_BASE } from '../config/api';

const ForgotPassword = () => {
	const location = useLocation();
	const [email, setEmail] = useState(location.state?.email || '');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [sent, setSent] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email.trim()) return;
		setError('');
		setLoading(true);
		try {
			const res = await fetch(`${API_BASE}/api/auth/forgot-password`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});
			const data = await res.json();
			if (!res.ok) { setError(data.message || 'Something went wrong'); return; }
			setSent(true);
		} catch {
			setError('Network error. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-[#0A0B0D] flex flex-col">
			{/* Top bar with logo */}
			<div className="px-6 pt-5">
				<a href="/">
					<Logo height={28} className="brightness-0 invert" />
				</a>
			</div>

			{/* Centered form */}
			<div className="flex-1 flex items-center justify-center px-4">
				<div className="w-full max-w-[390px]">
					<h1 className="text-[1.75rem] font-bold text-white mb-2">Reset your password</h1>
					<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
						Enter your email address to begin the password reset process.
					</p>

					{sent ? (
						<div className="px-6 py-5 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-center">
							<p className="font-semibold mb-1">Check your inbox</p>
							<p className="text-sm">If an account with <strong>{email}</strong> exists, a reset link has been sent.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit}>
							{/* Email field */}
							<div className="mb-4">
								<label className="block text-[0.875rem] font-semibold text-white mb-1.5">Email</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Your email address"
									className="w-full h-14 px-4 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
								/>
							</div>

							{error && (
								<div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
									{error}
								</div>
							)}

							{/* Continue button */}
							<button
								type="submit"
								disabled={loading}
								className="w-full h-14 rounded-full bg-[#5B8DEF] hover:bg-[#4A7DE0] active:bg-[#3B6DD0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[0.9375rem] transition-colors"
							>
								{loading ? 'Sending…' : 'Continue'}
							</button>
						</form>
					)}

					{/* Footer */}
					<p className="text-center text-[0.75rem] text-[#5B616E] leading-5 mt-8">
						Not your device? Use a private window. See our{' '}
						<a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
						{' '}for more info.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
