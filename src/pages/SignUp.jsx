// Step 12: Verifying Address
function VerifyingAddressStep() {
	return (
		<div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
			<div className="flex flex-col items-center">
				<div className="mb-8">
					<div className="w-32 h-32 rounded-full bg-[#0052FF] flex items-center justify-center mx-auto">
						<svg width="72" height="72" viewBox="0 0 48 48" fill="none">
							<rect x="12" y="8" width="24" height="32" rx="2" fill="white" fillOpacity="0.9" />
							<rect x="16" y="16" width="16" height="2" rx="1" fill="#0052FF" />
							<rect x="16" y="22" width="16" height="2" rx="1" fill="#0052FF" />
							<rect x="16" y="28" width="8" height="2" rx="1" fill="#0052FF" />
							<circle cx="24" cy="36" r="2" fill="#0052FF" />
						</svg>
					</div>
				</div>
				<h1 className="text-2xl font-bold text-white mb-2 text-center">Verifying your address...</h1>
				<p className="text-[#8A919E] text-center">Address verification is in progress</p>
			</div>
		</div>
	);
}

// Step 13: Address Verification Failed
function AddressFailStep({ onRetry }) {
	return (
		<div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
			<div className="flex flex-col items-center">
				<img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/spotSquare/svg/dark/verifyInfo-3.svg" alt="Document missing address" className="w-32 h-32 mb-8" />
				<h1 className="text-2xl font-bold text-white mb-2 text-center">Document missing address</h1>
				<p className="text-[#8A919E] text-center mb-6 max-w-md">We are unable to verify your address because your document is missing your address. Try again and make sure you choose a document that contains the following:</p>
				<ul className="text-white text-lg list-disc pl-6 mb-8 text-left">
					<li>Full legal name</li>
					<li>Residential address</li>
					<li>Document Date</li>
				</ul>
				<button className="w-64 h-14 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-bold text-lg" onClick={onRetry}>Try Again</button>
			</div>
		</div>
	);
}
// Step 10: Verify Address
import { useRef as useRef2 } from 'react';
function VerifyAddressStep({ onNext, onFile }) {
	const fileInputRef = useRef2(null);
	return (
		<div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
			<div className="w-full max-w-lg mx-auto">
				<h1 className="text-3xl font-bold text-white mb-2">Verify your address</h1>
				<h2 className="text-lg font-semibold text-white mb-4">Upload a proof of address</h2>
				<p className="text-[#8A919E] mb-8">Regulations require us to collect a document to verify the address you provided. Follow the instructions below:</p>
				<div className="flex flex-col gap-6 mb-8">
					<div className="flex items-start gap-4">
						<div className="flex items-center justify-center w-10 h-10 bg-[#23262B] rounded-lg">
							<svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="#5B616E"/><path d="M7 10h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8.5" cy="8.5" r="1.5" fill="#fff"/><rect x="16" y="7" width="4" height="4" rx="1" fill="#fff"/><path d="M18 9.5l1 1 2-2" stroke="#00A87A" strokeWidth="1.5" strokeLinecap="round"/></svg>
						</div>
						<div>
							<div className="font-semibold text-white">Prepare your documents</div>
							<div className="text-[#8A919E] text-sm">Upload a copy of your bank statement, utility bill or credit card statement in your name alone.<br/><a href="#" className="text-[#0052FF] underline">See other valid forms of documents.</a></div>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="flex items-center justify-center w-10 h-10 bg-[#23262B] rounded-lg">
							<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#5B616E"/><rect x="7" y="7" width="10" height="2" rx="1" fill="#fff"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/><polygon points="12,18 10,16 14,16" fill="#0052FF"/></svg>
						</div>
						<div>
							<div className="font-semibold text-white">Upload a document in English</div>
							<div className="text-[#8A919E] text-sm">We can only accept documents that are in English. Documents in other languages will not be accepted.</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center bg-[#16181C] rounded-xl border border-[#23262B] py-10 px-6 mb-8">
					<img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/spotSquare/svg/dark/commerceInvoices-3.svg" alt="Upload" className="w-24 h-24 mb-4" />
					<button
						className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00A87A] mb-4"
						onClick={() => fileInputRef.current && fileInputRef.current.click()}
						aria-label="Upload document"
					>
						<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#00A87A"/><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
					</button>
					<input ref={fileInputRef} type="file" accept="image/png,image/jpeg,application/pdf" className="hidden" onChange={e => { if (e.target.files[0]) onFile(e.target.files[0]); }} />
					<div className="text-white font-medium mb-2">Upload or drag and drop a copy of your chosen document.</div>
					<div className="text-[#8A919E] mb-6">Accepted formats: PNG, JPEG, or PDF.</div>
					<button className="w-48 h-12 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-semibold text-lg" onClick={() => fileInputRef.current && fileInputRef.current.click()}>Browse files</button>
				</div>
				<div className="mb-8">
					<button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#161C2B] text-white font-semibold text-left">
						Other valid forms of documents
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
					</button>
				</div>
				<div className="bg-[#00113A] rounded-lg p-4 flex items-center gap-3">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="#0052FF"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
					<div className="text-[#C7D1E0] text-sm">Your document will only be used to verify your address. No other information on the document will be associated with your account.</div>
				</div>
			</div>
		</div>
	);
}

// Step 11: Preview Uploaded Address Document
function PreviewAddressStep({ file, onConfirm, onReupload }) {
	return (
		<div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
			<div className="w-full max-w-lg mx-auto">
				<h1 className="text-3xl font-bold text-white mb-2">Verify your address</h1>
				<h2 className="text-lg font-semibold text-white mb-4">Is this document easy to read?</h2>
				<p className="text-[#8A919E] mb-6">Make sure that the address listed on your document and the address you entered on Coinbase match exactly.</p>
				<div className="flex flex-col items-center mb-8">
					{file && file.type.startsWith('image') ? (
						<img src={URL.createObjectURL(file)} alt="Uploaded document" className="max-w-full max-h-[400px] rounded-xl border border-[#23262B] mb-6" />
					) : (
						<div className="w-full h-48 flex items-center justify-center bg-[#16181C] rounded-xl border border-[#23262B] mb-6 text-[#8A919E]">PDF preview not available</div>
					)}
				</div>
				<div className="mb-8">
					<div className="font-bold text-white mb-2">Make sure your document is clear and not cut off.</div>
					<ul className="text-white text-lg list-disc pl-6">
						<li>Your full name</li>
						<li>Your current address</li>
						<li>The date</li>
						<li>The logo of the issuer</li>
					</ul>
				</div>
				<div className="flex flex-col gap-4">
					<button className="w-full h-14 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-bold text-lg" onClick={onConfirm}>Yes, looks good</button>
					<button className="w-full h-14 rounded-full bg-[#23262B] text-white font-bold text-lg" onClick={onReupload}>Re-upload</button>
				</div>
			</div>
		</div>
	);
}
// Step 9: All Set
function AllSetStep({ onContinue }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
			<div className="mb-8">
				{/* Provided SVG for checkmark */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="120" height="120" aria-hidden="true">
					<g>
						<circle cx="120" cy="120" r="64" fill="#0052FF" />
						<path d="M99.5 119.5L114.25 134.5L145.25 104.5" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
					</g>
				</svg>
			</div>
			<h2 className="text-2xl font-bold mb-2 text-white text-center">You're all set</h2>
			<p className="text-gray-400 mb-8 text-center">Your ID has been verified, you can continue.</p>
			<button
				className="w-full max-w-xs py-3 rounded-full font-semibold text-lg bg-[#0052FF] hover:bg-[#1a5cff] text-white transition"
				onClick={onContinue}
			>
				Continue
			</button>
		</div>
	);
}
import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

/* ════════════════════════════════════════════════════
   Shared dark-page shell
   ════════════════════════════════════════════════════ */
const Shell = ({ children, maxW = '440px' }) => (
	<div className="min-h-screen bg-[#0A0B0D] flex flex-col">
		<div className="px-6 pt-5">
			<a href="/"><Logo height={28} className="brightness-0 invert" /></a>
		</div>
		<div className="flex-1 flex items-center justify-center px-4 py-10">
			<div className="w-full" style={{ maxWidth: maxW }}>{children}</div>
		</div>
	</div>
);

/* ════════════════════════════════════════════════════
   Shared blue CTA button
   ════════════════════════════════════════════════════ */
const BlueBtn = ({ children, onClick, disabled, type = 'button' }) => (
	<button
		type={type}
		onClick={onClick}
		disabled={disabled}
		className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors
			${disabled
				? 'bg-[#1E2025] text-[#5B616E] cursor-not-allowed'
				: 'bg-[#0052FF] hover:bg-[#1a5cff] active:bg-[#0041cc] text-white cursor-pointer'
			}`}
	>
		{children}
	</button>
);

const DarkBtn = ({ children, onClick }) => (
	<button
		onClick={onClick}
		className="w-full h-14 rounded-full bg-[#2C2F36] hover:bg-[#3A3D44] text-white font-semibold text-[0.9375rem] transition-colors cursor-pointer"
	>
		{children}
	</button>
);

/* ── Reusable dark input ── */
const DarkInput = ({ label, hint, ...props }) => (
	<div className="mb-4">
		{label && <label className="block text-[0.875rem] font-semibold text-white mb-1.5">{label}</label>}
		<input
			{...props}
			className="w-full h-14 px-4 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
		/>
		{hint && <p className="text-[0.8125rem] text-[#5B616E] mt-1.5">{hint}</p>}
	</div>
);

/* ── Reusable dark select ── */
const DarkSelect = ({ label, hint, value, onChange, children }) => (
	<div className="mb-4">
		{label && <label className="block text-[0.875rem] font-semibold text-white mb-1.5">{label}</label>}
		<div className="relative">
			<select
				value={value}
				onChange={onChange}
				className="w-full h-14 px-4 pr-10 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors appearance-none cursor-pointer"
			>
				{children}
			</select>
			<svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="6 9 12 15 18 9" />
			</svg>
		</div>
		{hint && <p className="text-[0.8125rem] text-[#5B616E] mt-1.5">{hint}</p>}
	</div>
);

/* ── Icons ── */
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

const IdCardIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
		<rect x="2" y="4" width="20" height="16" rx="2" stroke="#0052FF" strokeWidth="2" />
		<circle cx="9" cy="10" r="2" fill="#0052FF" />
		<path d="M5 16c0-2 1.8-3 4-3s4 1 4 3" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
		<line x1="15" y1="9" x2="19" y2="9" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
		<line x1="15" y1="12" x2="19" y2="12" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
		<line x1="15" y1="15" x2="17" y2="15" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
	</svg>
);

const ChevronRight = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
		<polyline points="9 18 15 12 9 6" />
	</svg>
);

/* ════════════════════════════════════════════════════
   STEP 0 — Email entry (original sign-up)
   ════════════════════════════════════════════════════ */
const StepEmail = ({ email, setEmail, onNext }) => (
	<Shell>
		<form onSubmit={(e) => { e.preventDefault(); if (email.trim()) onNext(); }}>
			<h1 className="text-[1.75rem] font-bold text-white mb-2">Create your account</h1>
			<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
				Access all that Coinbase has to offer with a single account.
			</p>
			<DarkInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" />
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

/* ════════════════════════════════════════════════════
   STEP 1 — Verify email code
   ════════════════════════════════════════════════════ */
const StepVerifyEmail = ({ email, onNext }) => {
	const [code, setCode] = useState(['', '', '', '', '', '']);
	const [timer, setTimer] = useState(30);
	const refs = useRef([]);

	useEffect(() => {
		if (timer <= 0) return;
		const id = setInterval(() => setTimer((t) => t - 1), 1000);
		return () => clearInterval(id);
	}, [timer]);

	const focusAt = useCallback((i) => refs.current[i]?.focus(), []);

	const handleChange = (i, v) => {
		if (v && !/^\d$/.test(v)) return;
		const c = [...code]; c[i] = v; setCode(c);
		if (v && i < 5) focusAt(i + 1);
		if (c.every((d) => d)) setTimeout(onNext, 300);
	};

	const handleKey = (i, e) => { if (e.key === 'Backspace' && !code[i] && i > 0) focusAt(i - 1); };

	const handlePaste = (e) => {
		e.preventDefault();
		const p = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
		const c = [...code]; for (let i = 0; i < 6; i++) c[i] = p[i] || ''; setCode(c);
		focusAt(Math.min(p.length, 5));
		if (c.every((d) => d)) setTimeout(onNext, 300);
	};

	return (
		<Shell>
			<h1 className="text-[1.75rem] font-bold text-white mb-2">Enter the code we emailed you</h1>
			<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
				Check your email <span className="font-semibold text-white">{email}</span>.
				This helps us keep your account secure by verifying that it&apos;s really you.
			</p>
			<p className="text-[0.875rem] font-semibold text-white mb-3">Enter 6-digit code</p>
			<div className="flex gap-3 mb-6">
				{code.map((d, i) => (
					<input key={i} ref={(el) => (refs.current[i] = el)} type="text" inputMode="numeric" maxLength={1}
						value={d} onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKey(i, e)}
						onPaste={i === 0 ? handlePaste : undefined}
						className={`w-12 h-14 text-center text-xl font-semibold rounded-xl border bg-[#1E2025] text-white outline-none transition-colors ${d ? 'border-[#0052FF]' : 'border-[#2C2F36]'} focus:border-[#0052FF]`}
					/>
				))}
			</div>
			<button onClick={timer <= 0 ? () => setTimer(30) : undefined} disabled={timer > 0}
				className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors mb-6 ${timer > 0 ? 'bg-[#1E2025] text-[#5B616E] cursor-not-allowed' : 'bg-[#5B8DEF] hover:bg-[#4A7DE0] text-white cursor-pointer'}`}>
				{timer > 0 ? `Resend code in ${timer}` : 'Resend code'}
			</button>
			<p className="text-center text-[0.875rem] text-white">
				Can&apos;t access?{' '}<a href="#" className="text-[#0052FF] hover:underline font-medium">Update your 2FA</a>
			</p>
		</Shell>
	);
};

/* ════════════════════════════════════════════════════
   STEP 2 — Complete account setup (stepper)
   ════════════════════════════════════════════════════ */
const StepAccountSetup = ({ onNext }) => {
	const [agreed, setAgreed] = useState(true);

	return (
		<Shell>
			{/* Small avatar/icon cluster */}
			<div className="relative w-14 h-14 mb-4">
				<div className="w-8 h-8 rounded-full bg-[#F7931A] absolute top-0 left-1" />
				<svg className="absolute bottom-0 left-0" width="28" height="28" viewBox="0 0 24 24" fill="#5B616E"><polygon points="12 2 2 22 22 22" /></svg>
				<div className="w-5 h-5 rounded-full bg-[#0052FF] absolute bottom-0 right-2 border-2 border-[#0A0B0D]" />
			</div>

			<h1 className="text-[1.75rem] font-bold text-white mb-2">Complete account setup</h1>
			<p className="text-[0.9375rem] text-[#8A919E] mb-8 leading-6">
				<a href="#" className="text-[#0052FF] underline">Regulations</a> requires us to collect and verify your information
			</p>

			{/* Stepper */}
			<div className="flex flex-col gap-0 mb-8">
				{/* Step 1 — done */}
				<div className="flex gap-3">
					<div className="flex flex-col items-center">
						<div className="w-7 h-7 rounded-full bg-[#00A87A] flex items-center justify-center shrink-0">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
						</div>
						<div className="w-px h-10 bg-[#2C2F36]" />
					</div>
					<div className="pb-6">
						<p className="text-[0.9375rem] text-[#5B616E] font-semibold leading-5">Create your account</p>
						<p className="text-[0.8125rem] text-[#5B616E] mt-0.5">Add a password and secure your account</p>
						<p className="text-[0.8125rem] text-[#00A87A] font-medium mt-1">Complete</p>
					</div>
				</div>

				{/* Step 2 — active */}
				<div className="flex gap-3">
					<div className="flex flex-col items-center">
						<div className="w-7 h-7 rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
							<span className="text-[0.75rem] font-bold text-[#0052FF]">2</span>
						</div>
						<div className="w-px h-10 bg-[#2C2F36]" />
					</div>
					<div className="pb-6">
						<p className="text-[0.9375rem] text-white font-semibold leading-5">About you</p>
						<p className="text-[0.8125rem] text-[#8A919E] mt-0.5">Add your personal information</p>
						<p className="text-[0.8125rem] text-[#F7931A] font-medium mt-1 flex items-center gap-1">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
							Approx. 2 min
						</p>
					</div>
				</div>

				{/* Step 3 — pending */}
				<div className="flex gap-3">
					<div className="flex flex-col items-center">
						<div className="w-7 h-7 rounded-full border border-[#2C2F36] flex items-center justify-center shrink-0">
							<span className="text-[0.75rem] font-semibold text-[#5B616E]">3</span>
						</div>
					</div>
					<div>
						<p className="text-[0.9375rem] text-[#5B616E] font-semibold leading-5">Verify your identity</p>
						<p className="text-[0.8125rem] text-[#5B616E] mt-0.5">Upload and verify your identity documents</p>
						<p className="text-[0.8125rem] text-[#F7931A] font-medium mt-1 flex items-center gap-1">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
							Approx. 5 min
						</p>
					</div>
				</div>
			</div>

			{/* Checkbox */}
			<label className="flex items-start gap-3 mb-6 cursor-pointer">
				<input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
					className="mt-1 w-5 h-5 rounded border-[#2C2F36] bg-[#1E2025] accent-[#0052FF] cursor-pointer" />
				<span className="text-[0.8125rem] text-[#8A919E] leading-5">
					I certify that I am 18 years of age or older, I agree to the{' '}
					<a href="#" className="underline text-white hover:text-[#0052FF]">User Agreement</a>.
				</span>
			</label>

			<button
				className="w-full max-w-xs py-3 rounded-full font-semibold text-lg bg-[#0052FF] hover:bg-[#1a5cff] text-white transition"
				onClick={onNext}
				disabled={!agreed}
			>
				Submit
			</button>
		</Shell>
	);
};

/* ════════════════════════════════════════════════════
   STEP 3 — Be the first to know (email opt-in)
   ════════════════════════════════════════════════════ */
const StepEmailOptIn = ({ onNext }) => (
	<Shell>
		<div className="flex flex-col items-center text-center">
			<img
				src="https://static-assets.coinbase.com/ui-infra/illustration/v1/heroSquare/svg/dark/optInPushNotificationsEmail-3.svg"
				alt="Email notifications"
				className="w-48 h-48 mb-6"
			/>
			<h1 className="text-[1.75rem] font-bold text-white mb-6">Be the first to know</h1>
			<p className="text-[0.9375rem] text-[#8A919E] mb-4 leading-6 max-w-sm">
				Would you like to receive emails from Coinbase on price updates, product announcements, and trading insights we think you might be interested in?
			</p>
			<p className="text-[0.9375rem] text-[#8A919E] mb-8 leading-6 max-w-sm">
				You can learn more and unsubscribe anytime via your account settings or our Support Portal.
			</p>
			<div className="w-full flex flex-col gap-3">
				<BlueBtn onClick={onNext}>Yes</BlueBtn>
				<DarkBtn onClick={onNext}>No</DarkBtn>
			</div>
		</div>
	</Shell>
);

/* ════════════════════════════════════════════════════
   STEP 4 — Where are you from?
   ════════════════════════════════════════════════════ */
const StepCountry = ({ citizenship, setCitizenship, residence, setResidence, onNext }) => (
	<Shell>
		<form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
			<h1 className="text-[1.75rem] font-bold text-white mb-2">Where are you from?</h1>
			<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
				Coinbase is <a href="#" className="underline text-white hover:text-[#0052FF]">legally required</a> to collect this information. If you&apos;re a citizen of more than one country, please pick one.
			</p>
			<DarkSelect label="Citizenship" hint="As shown on your ID document" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}>
				<option value="GH">🇬🇭 Ghana</option>
				<option value="US">🇺🇸 United States</option>
				<option value="GB">🇬🇧 United Kingdom</option>
				<option value="NG">🇳🇬 Nigeria</option>
				<option value="KE">🇰🇪 Kenya</option>
				<option value="ZA">🇿🇦 South Africa</option>
				<option value="CA">🇨🇦 Canada</option>
				<option value="DE">🇩🇪 Germany</option>
				<option value="FR">🇫🇷 France</option>
				<option value="IN">🇮🇳 India</option>
			</DarkSelect>
			<DarkSelect label="Country of residence" hint="You will need to provide your ID and Proof of Address from this country" value={residence} onChange={(e) => setResidence(e.target.value)}>
				<option value="GH">🇬🇭 Ghana</option>
				<option value="US">🇺🇸 United States</option>
				<option value="GB">🇬🇧 United Kingdom</option>
				<option value="NG">🇳🇬 Nigeria</option>
				<option value="KE">🇰🇪 Kenya</option>
				<option value="ZA">🇿🇦 South Africa</option>
				<option value="CA">🇨🇦 Canada</option>
				<option value="DE">🇩🇪 Germany</option>
				<option value="FR">🇫🇷 France</option>
				<option value="IN">🇮🇳 India</option>
			</DarkSelect>
			<div className="mt-2">
				<BlueBtn type="submit">Continue</BlueBtn>
			</div>
		</form>
	</Shell>
);

/* ════════════════════════════════════════════════════
   STEP 5 — Place of birth
   ════════════════════════════════════════════════════ */
const StepBirth = ({ city, setCity, country, setCountry, onNext }) => (
	<Shell>
		<form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
			<h1 className="text-[1.75rem] font-bold text-white mb-2">Enter your place of birth</h1>
			<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
				Coinbase is legally required to collect this info.
			</p>
			<DarkInput label="City of birth" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Accra" />
			<DarkSelect label="Country of birth" value={country} onChange={(e) => setCountry(e.target.value)}>
				<option value="GH">🇬🇭 Ghana</option>
				<option value="US">🇺🇸 United States</option>
				<option value="GB">🇬🇧 United Kingdom</option>
				<option value="NG">🇳🇬 Nigeria</option>
				<option value="KE">🇰🇪 Kenya</option>
				<option value="ZA">🇿🇦 South Africa</option>
				<option value="CA">🇨🇦 Canada</option>
				<option value="DE">🇩🇪 Germany</option>
				<option value="FR">🇫🇷 France</option>
				<option value="IN">🇮🇳 India</option>
			</DarkSelect>
			<div className="mt-2">
				<BlueBtn type="submit">Submit</BlueBtn>
			</div>
		</form>
	</Shell>
);

/* ════════════════════════════════════════════════════
   STEP 6 — Select ID type
   ════════════════════════════════════════════════════ */
const StepIdType = ({ onSelect }) => {
	const ids = [
		{ title: "Driver's license", sub: 'Recommended' },
		{ title: 'Identity card', sub: null },
		{ title: 'Passport', sub: null },
	];

	return (
		<Shell>
			<h1 className="text-[1.75rem] font-bold text-white mb-6">Select your ID type</h1>

			<div className="flex flex-col gap-3 mb-6">
				{ids.map((id) => (
					<button key={id.title} onClick={() => onSelect(id.title)}
						className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors text-left">
						<IdCardIcon />
						<div className="flex-1 min-w-0">
							<p className="text-[0.9375rem] font-semibold text-white">{id.title}</p>
							{id.sub && <p className="text-[0.8125rem] text-[#5B616E]">{id.sub}</p>}
						</div>
						<ChevronRight />
					</button>
				))}
			</div>

			<div className="rounded-xl border border-[#2C2F36] bg-[#1E2025] p-4 mb-6">
				<p className="text-[0.8125rem] text-[#5B616E] leading-5">
					By selecting your ID type on this screen, you agree that our (and our service providers) collection, use, and storage of your biometric information for identity verification. Learn more in Section 5 of our{' '}
					<a href="#" className="text-[#0052FF] hover:underline">Privacy Policy</a>.
				</p>
			</div>

			<DarkBtn onClick={() => onSelect(null)}>I don&apos;t have any of these IDs</DarkBtn>
		</Shell>
	);
};

/* ════════════════════════════════════════════════════
   STEP 7 — Upload images
   ════════════════════════════════════════════════════ */
const StepUpload = ({ onNext, onBack }) => {
	const [front, setFront] = useState(null);
	const [back, setBack] = useState(null);
	const frontRef = useRef(null);
	const backRef = useRef(null);

	const handleFile = (setter) => (e) => {
		const file = e.target.files?.[0];
		if (file) setter(file.name);
	};

	return (
		<Shell>
			<div className="text-center">
				<h1 className="text-[1.75rem] font-bold text-white mb-2">Upload images</h1>
				<p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
					Upload pictures of your photo id (JPEG or PNG).
				</p>
			</div>

			{/* Upload zones */}
			<div className="flex gap-4 mb-6">
				{/* Front */}
				<button onClick={() => frontRef.current?.click()}
					className="flex-1 flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors cursor-pointer">
					<img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/dark/identityCard-3.svg" alt="ID" className="w-12 h-12 opacity-60" />
					<span className="text-[0.8125rem] text-[#5B616E]">{front || 'Drag & drop or click to upload'}</span>
				</button>
				<input ref={frontRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handleFile(setFront)} />

				{/* Back */}
				<button onClick={() => backRef.current?.click()}
					className="flex-1 flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors cursor-pointer">
					<img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/dark/identityCard-3.svg" alt="ID" className="w-12 h-12 opacity-60" />
					<span className="text-[0.8125rem] text-[#5B616E]">{back || 'Drag & drop or click to upload'}</span>
				</button>
				<input ref={backRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handleFile(setBack)} />
			</div>

			{/* Labels */}
			<div className="flex gap-4 mb-6">
				<p className="flex-1 text-center text-[0.875rem] text-white font-medium">Front</p>
				<p className="flex-1 text-center text-[0.875rem] text-white font-medium">Back</p>
			</div>

			<p className="text-[0.8125rem] text-[#8A919E] text-center leading-5 mb-6">
				Please do not redact, watermark or otherwise obscure any part of your ID.
				This will help ensure we can verify your identity document as quickly and accurately as possible.
			</p>

			<BlueBtn onClick={onNext}>Upload</BlueBtn>
			<button onClick={onBack} className="w-full mt-4 text-center text-[0.875rem] text-[#0052FF] hover:underline font-medium">
				Go back
			</button>
		</Shell>
	);
};

/* ════════════════════════════════════════════════════
   STEP 8 — Verifying identity (loading state)
   ════════════════════════════════════════════════════ */
const StepVerifying = () => (
	<div className="min-h-screen bg-[#0A0B0D] flex flex-col">
		<div className="px-6 pt-5">
			<a href="/"><Logo height={28} className="brightness-0 invert" /></a>
		</div>
		<div className="flex-1 flex flex-col items-center justify-center px-4">
			{/* Blue circle with document icon */}
			<div className="w-28 h-28 rounded-full bg-[#0052FF] flex items-center justify-center mb-8 animate-pulse">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
					<rect x="12" y="6" width="24" height="32" rx="2" fill="white" fillOpacity="0.9" />
					<line x1="16" y1="14" x2="32" y2="14" stroke="#0052FF" strokeWidth="1.5" />
					<line x1="16" y1="18" x2="32" y2="18" stroke="#0052FF" strokeWidth="1.5" />
					<line x1="16" y1="22" x2="32" y2="22" stroke="#0052FF" strokeWidth="1.5" />
					<line x1="16" y1="26" x2="28" y2="26" stroke="#0052FF" strokeWidth="1.5" />
					<circle cx="18" cy="32" r="1.5" fill="#0052FF" />
					<circle cx="22" cy="32" r="1.5" fill="#0052FF" />
					<circle cx="26" cy="32" r="1.5" fill="#0052FF" />
				</svg>
			</div>
			<h1 className="text-[1.75rem] font-bold text-white mb-3">Verifying your identity</h1>
			<p className="text-[0.9375rem] text-[#8A919E]">This should only take a minute.</p>
		</div>
	</div>
);

/* ════════════════════════════════════════════════════
   MAIN SIGN-UP COMPONENT — step orchestrator
   ════════════════════════════════════════════════════ */
const SignUp = () => {
	const [step, setStep] = useState(0);
	const [email, setEmail] = useState('');
	const [citizenship, setCitizenship] = useState('GH');
	const [residence, setResidence] = useState('GH');
	const [birthCity, setBirthCity] = useState('');
	const [birthCountry, setBirthCountry] = useState('GH');
	const [addressFile, setAddressFile] = useState(null);

	const next = () => setStep((s) => s + 1);
	const back = () => setStep((s) => Math.max(0, s - 1));

	switch (step) {
		case 0: return <StepEmail email={email} setEmail={setEmail} onNext={next} />;
		case 1: return <StepVerifyEmail email={email} onNext={next} />;
		case 2: return <StepAccountSetup onNext={next} />;
		case 3: return <StepEmailOptIn onNext={next} />;
		case 4: return <StepCountry citizenship={citizenship} setCitizenship={setCitizenship} residence={residence} setResidence={setResidence} onNext={next} />;
		case 5: return <StepBirth city={birthCity} setCity={setBirthCity} country={birthCountry} setCountry={setBirthCountry} onNext={next} />;
		case 6: return <StepIdType onSelect={() => next()} />;
		case 7: return <StepUpload onNext={next} onBack={back} />;
		case 8: return <StepVerifying />;
		case 9: return <AllSetStep onContinue={next} />;
		case 10: return <VerifyAddressStep onNext={next} onFile={file => { setAddressFile(file); setStep(11); }} />;
		case 11: return <PreviewAddressStep file={addressFile} onConfirm={() => setStep(12)} onReupload={() => setStep(10)} />;
		case 12: return <VerifyingAddressStep />;
		case 13: return <AddressFailStep onRetry={() => setStep(10)} />;
		default: return <StepVerifying />;
	}
};

export default SignUp;
