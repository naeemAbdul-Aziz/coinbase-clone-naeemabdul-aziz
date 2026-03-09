import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const RESEND_SECONDS = 30;

const VerifyCode = () => {
	const location = useLocation();
	const email = location.state?.email || 'your email';

	const [code, setCode] = useState(['', '', '', '', '', '']);
	const [timer, setTimer] = useState(RESEND_SECONDS);
	const [canResend, setCanResend] = useState(false);
	const inputRefs = useRef([]);

	// Countdown timer
	useEffect(() => {
		if (timer <= 0) {
			setCanResend(true);
			return;
		}
		const id = setInterval(() => setTimer((t) => t - 1), 1000);
		return () => clearInterval(id);
	}, [timer]);

	const handleResend = () => {
		setTimer(RESEND_SECONDS);
		setCanResend(false);
	};

	const focusInput = useCallback((index) => {
		inputRefs.current[index]?.focus();
	}, []);

	const handleChange = (index, value) => {
		// Only allow single digit
		if (value && !/^\d$/.test(value)) return;

		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		// Auto-advance to next input
		if (value && index < 5) {
			focusInput(index + 1);
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && !code[index] && index > 0) {
			focusInput(index - 1);
		}
	};

	const handlePaste = (e) => {
		e.preventDefault();
		const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
		if (!pasted) return;
		const newCode = [...code];
		for (let i = 0; i < 6; i++) {
			newCode[i] = pasted[i] || '';
		}
		setCode(newCode);
		focusInput(Math.min(pasted.length, 5));
	};

	return (
		<div className="min-h-screen bg-[#0A0B0D] flex flex-col">
			{/* Top bar with logo */}
			<div className="px-6 pt-5">
				<a href="/">
					<Logo height={28} className="brightness-0 invert" />
				</a>
			</div>

			{/* Centered content */}
			<div className="flex-1 flex items-center justify-center px-4">
				<div className="w-full max-w-[390px]">
					<h1 className="text-[1.75rem] font-bold text-white mb-2">
						Enter the code we emailed you
					</h1>
					<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
						Check your email <span className="font-semibold text-white">{email}</span>.
						This helps us keep your account secure by verifying that it&apos;s really you.
					</p>

					{/* Label */}
					<p className="text-[0.875rem] font-semibold text-white mb-3">Enter 6-digit code</p>

					{/* 6-digit code inputs */}
					<div className="flex gap-3 mb-6">
						{code.map((digit, i) => (
							<input
								key={i}
								ref={(el) => (inputRefs.current[i] = el)}
								type="text"
								inputMode="numeric"
								maxLength={1}
								value={digit}
								onChange={(e) => handleChange(i, e.target.value)}
								onKeyDown={(e) => handleKeyDown(i, e)}
								onPaste={i === 0 ? handlePaste : undefined}
								className={`
									w-12 h-14 text-center text-xl font-semibold
									rounded-xl border bg-[#1E2025] text-white
									outline-none transition-colors
									${digit ? 'border-[#0052FF]' : 'border-[#2C2F36]'}
									focus:border-[#0052FF]
								`}
							/>
						))}
					</div>

					{/* Resend button */}
					<button
						onClick={canResend ? handleResend : undefined}
						disabled={!canResend}
						className={`
							w-full h-14 rounded-full font-semibold text-[0.9375rem]
							transition-colors mb-6
							${canResend
								? 'bg-[#5B8DEF] hover:bg-[#4A7DE0] text-white cursor-pointer'
								: 'bg-[#1E2025] text-[#5B616E] cursor-not-allowed'
							}
						`}
					>
						{canResend ? 'Resend code' : `Resend code in ${timer}`}
					</button>

					{/* 2FA link */}
					<p className="text-center text-[0.875rem] text-white">
						Can&apos;t access?{' '}
						<Link to="#" className="text-[#0052FF] hover:underline font-medium">
							Update your 2FA
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default VerifyCode;
