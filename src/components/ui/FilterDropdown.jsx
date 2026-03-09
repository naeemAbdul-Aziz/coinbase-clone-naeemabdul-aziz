import { useState, useRef, useEffect } from 'react';

/* ── Icons ── */
const ChevronDown = () => (
	<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);
const ChevronUp = () => (
	<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
);
const CheckIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const SearchIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

/**
 * FilterDropdown — Coinbase-style pill dropdown with optional icon, search, and selection.
 *
 * Props:
 * - label:       display text when nothing selected (e.g. "All assets")
 * - value:       currently selected value
 * - options:     [{ value, label, sublabel?, icon? }]
 * - onChange:    (value) => void
 * - searchable: boolean — adds search input at top
 * - icon:        optional leading icon element
 */
const FilterDropdown = ({
	label,
	value,
	options,
	onChange,
	searchable = false,
	icon = null,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState('');
	const ref = useRef(null);

	// Close on outside click
	useEffect(() => {
		const handleClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false);
				setSearch('');
			}
		};
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, []);

	const selectedOption = options.find((o) => o.value === value);
	const displayLabel = selectedOption?.label || label;

	const filtered = searchable && search
		? options.filter(
			(o) =>
				o.label.toLowerCase().includes(search.toLowerCase()) ||
				(o.sublabel && o.sublabel.toLowerCase().includes(search.toLowerCase())) ||
				o.value.toLowerCase().includes(search.toLowerCase())
		)
		: options;

	return (
		<div ref={ref} className="relative">
			{/* Pill trigger */}
			<button
				onClick={() => { setIsOpen(!isOpen); setSearch(''); }}
				className={`
					inline-flex items-center gap-2 px-4 py-2
					rounded-full border transition-all duration-200 cursor-pointer
					text-label-1 whitespace-nowrap select-none
					${isOpen
						? 'border-gray-100 bg-gray-100 text-white'
						: 'border-gray-20 bg-white text-gray-100 hover:bg-gray-5'
					}
				`}
			>
				{icon && <span className="opacity-60">{icon}</span>}
				{displayLabel}
				{isOpen ? <ChevronUp /> : <ChevronDown />}
			</button>

			{/* Dropdown panel */}
			{isOpen && (
				<div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-xl border border-gray-10 shadow-elevation-2 min-w-[180px] max-h-[320px] overflow-hidden flex flex-col animate-in fade-in">
					{/* Search input */}
					{searchable && (
						<div className="p-3 border-b border-gray-10">
							<div className="relative">
								<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-40"><SearchIcon /></span>
								<input
									type="text"
									placeholder="Search"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									autoFocus
									className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-15 bg-white text-body text-gray-100 outline-none focus:border-blue-60 transition-colors placeholder:text-gray-40"
								/>
							</div>
						</div>
					)}

					{/* Options list */}
					<div className="overflow-y-auto py-1">
						{filtered.length === 0 ? (
							<p className="px-4 py-3 text-label-2 text-gray-40">No results</p>
						) : (
							filtered.map((opt) => {
								const isSelected = opt.value === value;
								return (
									<button
										key={opt.value}
										onClick={() => {
											onChange(opt.value);
											setIsOpen(false);
											setSearch('');
										}}
										className={`
											w-full flex items-center gap-3 px-4 py-3 text-left
											transition-colors duration-100 cursor-pointer border-none bg-transparent
											${isSelected ? 'bg-blue-0' : 'hover:bg-gray-5'}
										`}
									>
										{opt.icon && <span className="text-gray-60 shrink-0">{opt.icon}</span>}
										<div className="flex flex-col min-w-0 flex-1">
											<span className={`text-body truncate ${isSelected ? 'text-gray-100 font-semibold' : 'text-gray-100'}`}>
												{opt.label}
											</span>
											{opt.sublabel && (
												<span className="text-legal text-gray-40 truncate">{opt.sublabel}</span>
											)}
										</div>
										{isSelected && <span className="shrink-0 ml-auto"><CheckIcon /></span>}
									</button>
								);
							})
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterDropdown;
