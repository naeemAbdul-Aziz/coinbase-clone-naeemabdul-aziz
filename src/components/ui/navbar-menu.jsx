import { motion, AnimatePresence } from 'motion/react';

/* ── Dropdown wrapper ── */
export const NavDropdown = ({ children, isOpen }) => (
	<AnimatePresence>
		{isOpen && (
			<motion.div
				initial={{ opacity: 0, y: -4 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -4 }}
				transition={{ duration: 0.15, ease: 'easeOut' }}
				className="absolute top-full left-0 w-full bg-white border-t border-gray-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50"
			>
				{children}
			</motion.div>
		)}
	</AnimatePresence>
);

/* ── Section heading inside a dropdown ── */
export const NavSectionHeader = ({ children, href }) => (
	href ? (
		<a
			href={href}
			className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-gray-100 hover:text-blue-60 transition-colors mb-3"
		>
			{children}
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-px">
				<path d="M9 18l6-6-6-6" />
			</svg>
		</a>
	) : (
		<p className="text-[0.8125rem] font-semibold text-gray-60 mb-3">{children}</p>
	)
);

/* ── Single menu item with icon + title + description ── */
export const NavMenuItem = ({ icon, title, description, href = '#' }) => (
	<a
		href={href}
		className="flex items-center gap-3 group py-2.5 px-2 -mx-2 rounded-lg hover:bg-gray-5 transition-colors"
	>
		<div className="w-9 h-9 rounded-lg bg-gray-10 flex items-center justify-center shrink-0 group-hover:bg-gray-15 transition-colors">
			{icon}
		</div>
		<div className="min-w-0">
			<p className="text-[0.875rem] font-semibold text-gray-100 leading-5">{title}</p>
			{description && (
				<p className="text-[0.8125rem] text-gray-60 leading-[1.35] mt-0.5">{description}</p>
			)}
		</div>
	</a>
);

/* ── Featured card (rightmost column) ── */
export const NavFeatured = ({ image, title, description, linkText, href = '#' }) => (
	<div className="flex flex-col gap-4 min-w-[220px] max-w-[260px]">
		<div className="w-full aspect-square max-w-[180px] rounded-2xl overflow-hidden bg-blue-60 shrink-0">
			{image ?? <div className="w-full h-full bg-gradient-to-br from-[#0052FF] to-[#1A6FFF]" />}
		</div>
		<div className="flex flex-col gap-1">
			<p className="text-[1rem] font-semibold text-gray-100 leading-6">{title}</p>
			<p className="text-[0.875rem] text-gray-60 leading-5">{description}</p>
			<a
				href={href}
				className="text-[0.875rem] font-semibold text-gray-100 underline underline-offset-2 mt-1 inline-block hover:text-blue-60 transition-colors"
			>
				{linkText}
			</a>
		</div>
	</div>
);
