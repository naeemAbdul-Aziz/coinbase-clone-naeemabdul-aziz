import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const LANGUAGES = [
	{ name: 'English',  region: 'Global',        active: true },
	{ name: 'Español',  region: 'United States' },
	{ name: 'English',  region: 'United States' },
	{ name: 'Deutsch',  region: 'Germany' },
	{ name: 'Français', region: 'France' },
	{ name: 'Italiano', region: 'Italy' },
	{ name: 'Português',region: 'Brazil' },
	{ name: 'Türkçe',   region: 'Turkey' },
	{ name: '日本語',    region: 'Japan' },
	{ name: '한국어',    region: 'Korea' },
	{ name: '简体中文',  region: 'China' },
	{ name: 'Русский',  region: 'Russia' },
	{ name: 'Nederlands',region: 'Netherlands' },
	{ name: 'Polski',   region: 'Poland' },
];

const LanguageDropdown = ({ onClose }) => {
	const [query, setQuery] = useState('');
	const ref = useRef(null);

	useEffect(() => {
		const handler = (e) => {
			if (ref.current && !ref.current.contains(e.target)) onClose();
		};
		document.addEventListener('mousedown', handler);
		return () => document.removeEventListener('mousedown', handler);
	}, [onClose]);

	const filtered = LANGUAGES.filter(
		l => !query || l.name.toLowerCase().includes(query.toLowerCase()) || l.region.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: -6, scale: 0.97 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -6, scale: 0.97 }}
			transition={{ duration: 0.15, ease: 'easeOut' }}
			className="absolute top-[calc(100%+8px)] right-0 w-[320px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
		>
			{/* Header */}
			<div className="px-5 pt-5 pb-3">
				<p className="text-[0.8125rem] font-semibold text-gray-60 mb-3">Language and region</p>
				{/* Search */}
				<div className="flex items-center gap-2 bg-gray-10 rounded-full px-4 py-2">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-60 shrink-0">
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
					<input
						autoFocus
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search"
						className="bg-transparent text-[0.875rem] text-gray-100 placeholder:text-gray-40 outline-none w-full"
					/>
				</div>
			</div>

			{/* Language list */}
			<div className="max-h-[320px] overflow-y-auto pb-3">
				{filtered.map((lang, i) => (
					<button
						key={i}
						onClick={onClose}
						className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-5 transition-colors text-left"
					>
						<div>
							<p className="text-[0.875rem] font-semibold text-gray-100">{lang.name}</p>
							{lang.region && <p className="text-[0.8125rem] text-gray-60">{lang.region}</p>}
						</div>
						{lang.active && (
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 shrink-0">
								<polyline points="20 6 9 17 4 12" />
							</svg>
						)}
					</button>
				))}
			</div>
		</motion.div>
	);
};

export default LanguageDropdown;
