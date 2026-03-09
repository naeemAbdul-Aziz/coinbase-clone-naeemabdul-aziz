import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const ForgotPassword = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [email, setEmail] = useState(location.state?.email || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.trim()) {
			// No backend — just navigate to verify code page
			navigate('/verify', { state: { email, from: 'forgot-password' } });
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

						{/* Continue button */}
						<button
							type="submit"
							className="w-full h-14 rounded-full bg-[#5B8DEF] hover:bg-[#4A7DE0] active:bg-[#3B6DD0] text-white font-semibold text-[0.9375rem] transition-colors"
						>
							Continue
						</button>
					</form>

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
