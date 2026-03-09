import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COUNTRIES = [
	{ name: 'United States', flag: '🇺🇸' },
	{ name: 'Germany',       flag: '🇩🇪' },
	{ name: 'United Kingdom',flag: '🇬🇧' },
	{ name: 'France',        flag: '🇫🇷' },
	{ name: 'Canada',        flag: '🇨🇦' },
	{ name: 'Spain',         flag: '🇪🇸' },
	{ name: 'Italy',         flag: '🇮🇹' },
	{ name: 'Netherlands',   flag: '🇳🇱' },
	{ name: 'Brazil',        flag: '🇧🇷' },
	{ name: 'Australia',     flag: '🇦🇺' },
	{ name: 'Japan',         flag: '🇯🇵' },
	{ name: 'South Korea',   flag: '🇰🇷' },
	{ name: 'Singapore',     flag: '🇸🇬' },
	{ name: 'India',         flag: '🇮🇳' },
	{ name: 'Mexico',        flag: '🇲🇽' },
	{ name: 'Poland',        flag: '🇵🇱' },
	{ name: 'Portugal',      flag: '🇵🇹' },
	{ name: 'Sweden',        flag: '🇸🇪' },
	{ name: 'Turkey',        flag: '🇹🇷' },
	{ name: 'Ghana',         flag: '🇬🇭' },
	{ name: 'South Africa',  flag: '🇿🇦' },
	{ name: 'Nigeria',       flag: '🇳🇬' },
];

const LANGUAGES = [
	'English',
	'Español - América Latina',
	'Français',
	'Polski',
	'Русский',
	'ไทย',
	'简体中文',
	'Deutsch',
	'Italiano',
	'Português',
	'日本語',
	'한국어',
	'Nederlands',
	'Türkçe',
];

/* ── Chevron ── */
const ChevronRight = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-40 shrink-0">
		<path d="M9 18l6-6-6-6" />
	</svg>
);

/* ── Back arrow ── */
const BackArrow = ({ onClick }) => (
	<button onClick={onClick} className="p-1 -ml-1 rounded-lg hover:bg-gray-10 transition-colors">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M19 12H5M12 19l-7-7 7-7" />
		</svg>
	</button>
);

/* ── Close button ── */
const CloseButton = ({ onClick }) => (
	<button
		onClick={onClick}
		className="w-9 h-9 rounded-full border-2 border-blue-60 flex items-center justify-center hover:bg-blue-0 transition-colors shrink-0"
	>
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
			<path stroke="#0052FF" strokeWidth="2" strokeLinecap="round" d="M1.5 1.5 12.5 12.5M12.5 1.5 1.5 12.5" />
		</svg>
	</button>
);

/* ── Main view ── */
const MainView = ({ onClose, onCountry, onLanguage, country, language }) => (
	<>
		<div className="flex items-center justify-between px-6 py-5 border-b border-gray-10">
			<h2 className="text-[1rem] font-semibold text-gray-100">Global preferences</h2>
			<CloseButton onClick={onClose} />
		</div>
		<div className="px-6 py-4">
			<button
				onClick={onCountry}
				className="w-full flex items-center justify-between py-5 border-b border-gray-10 text-left group"
			>
				<div>
					<p className="text-[0.9375rem] font-semibold text-gray-100">Country / region</p>
					<p className="text-[0.875rem] text-gray-60 mt-0.5">{country}</p>
				</div>
				<ChevronRight />
			</button>
			<button
				onClick={onLanguage}
				className="w-full flex items-center justify-between py-5 text-left group"
			>
				<div>
					<p className="text-[0.9375rem] font-semibold text-gray-100">Language</p>
					<p className="text-[0.875rem] text-gray-60 mt-0.5">{language}</p>
				</div>
				<ChevronRight />
			</button>
		</div>
	</>
);

/* ── Country view ── */
const CountryView = ({ onBack, onClose, selected, onSelect }) => {
	const [query, setQuery] = useState('');
	const filtered = COUNTRIES.filter(c =>
		!query || c.name.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<div className="flex items-center justify-between px-6 py-5 border-b border-gray-10">
				<div className="flex items-center gap-3">
					<BackArrow onClick={onBack} />
					<h2 className="text-[1rem] font-semibold text-gray-100">Country / region</h2>
				</div>
				<CloseButton onClick={onClose} />
			</div>
			<div className="px-6 pt-4 pb-2">
				<div className="flex items-center gap-2 bg-gray-10 rounded-full px-4 py-2.5">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-60 shrink-0">
						<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
					</svg>
					<input
						autoFocus
						value={query}
						onChange={e => setQuery(e.target.value)}
						placeholder="Search"
						className="bg-transparent text-[0.875rem] text-gray-100 placeholder:text-gray-40 outline-none w-full"
					/>
				</div>
			</div>
			<div className="overflow-y-auto max-h-[380px]">
				{filtered.map((c) => (
					<button
						key={c.name}
						onClick={() => { onSelect(c.name); onBack(); }}
						className={`w-full flex items-center justify-between px-6 py-4 hover:bg-gray-5 transition-colors text-left border-b border-gray-5 ${selected === c.name ? 'bg-gray-5' : ''}`}
					>
						<div className="flex items-center gap-3">
							<span className="text-[1.5rem] leading-none">{c.flag}</span>
							<span className="text-[0.9375rem] font-semibold text-gray-100">{c.name}</span>
						</div>
						<ChevronRight />
					</button>
				))}
			</div>
		</>
	);
};

/* ── Language view ── */
const LanguageView = ({ onBack, onClose, selected, onSelect }) => (
	<>
		<div className="flex items-center justify-between px-6 py-5 border-b border-gray-10">
			<div className="flex items-center gap-3">
				<BackArrow onClick={onBack} />
				<h2 className="text-[1rem] font-semibold text-gray-100">Language</h2>
			</div>
			<CloseButton onClick={onClose} />
		</div>
		<div className="overflow-y-auto max-h-[420px]">
			{LANGUAGES.map((lang) => (
				<button
					key={lang}
					onClick={() => { onSelect(lang); onBack(); }}
					className={`w-full px-6 py-5 text-left text-[0.9375rem] font-semibold text-gray-100 hover:bg-gray-5 transition-colors border-b border-gray-5 ${selected === lang ? 'bg-gray-5' : ''}`}
				>
					{lang}
				</button>
			))}
		</div>
	</>
);

/* ── Modal ── */
const GlobalPreferencesModal = ({ onClose, country, language, onCountryChange, onLanguageChange }) => {
	const [view, setView] = useState('main'); // 'main' | 'country' | 'language'

	// Close on Escape
	useEffect(() => {
		const handler = (e) => { if (e.key === 'Escape') onClose(); };
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 bg-black/40"
				onClick={onClose}
			/>

			{/* Panel */}
			<motion.div
				initial={{ opacity: 0, scale: 0.96, y: 8 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.96, y: 8 }}
				transition={{ duration: 0.18, ease: 'easeOut' }}
				className="relative bg-white rounded-2xl w-full max-w-[560px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
			>
				<AnimatePresence mode="wait">
					{view === 'main' && (
						<motion.div key="main" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.15 }}>
							<MainView
								onClose={onClose}
								onCountry={() => setView('country')}
								onLanguage={() => setView('language')}
								country={country}
								language={language}
							/>
						</motion.div>
					)}
					{view === 'country' && (
						<motion.div key="country" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.15 }}>
							<CountryView
								onBack={() => setView('main')}
								onClose={onClose}
								selected={country}
								onSelect={onCountryChange}
							/>
						</motion.div>
					)}
					{view === 'language' && (
						<motion.div key="language" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.15 }}>
							<LanguageView
								onBack={() => setView('main')}
								onClose={onClose}
								selected={language}
								onSelect={onLanguageChange}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default GlobalPreferencesModal;
