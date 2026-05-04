import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import Logo from './ui/Logo';
import Button from './ui/Button';
import Container from './ui/Container';
import { NavDropdown, NavMenuItem, NavSectionHeader, NavFeatured } from './ui/navbar-menu';
import SearchDropdown from './ui/SearchDropdown';
import LanguageDropdown from './ui/LanguageDropdown';

/* ── Simple icon components ── */
const Icon = ({ children }) => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gray-60">
		{children}
	</svg>
);
const BuySellIcon      = () => <Icon><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8l4 4-4 4"/></Icon>;
const AppIcon          = () => <Icon><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>;
const OneIcon          = () => <Icon><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/></Icon>;
const DiamondIcon      = () => <Icon><path d="M12 2L2 8l10 14L22 8z"/></Icon>;
const ChainIcon        = () => <Icon><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></Icon>;
const LearnIcon        = () => <Icon><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></Icon>;
const AdvancedIcon     = () => <Icon><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>;
const EarnIcon         = () => <Icon><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></Icon>;
const WealthIcon       = () => <Icon><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const CreditCardIcon   = () => <Icon><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></Icon>;
const BusinessIcon     = () => <Icon><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
const ListingsIcon     = () => <Icon><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></Icon>;
const PaymentsIcon     = () => <Icon><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M7 15h.01M11 15h4"/></Icon>;
const TokenIcon        = () => <Icon><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></Icon>;
const ClockIcon        = () => <Icon><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>;
const ShieldIcon       = () => <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>;
const PercentIcon      = () => <Icon><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></Icon>;
const WalletIcon       = () => <Icon><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M16 10h.01"/><path d="M18 8v4"/></Icon>;
const ExchangeIcon     = () => <Icon><path d="M18 8L22 12L18 16"/><path d="M2 12h20"/><path d="M6 16L2 12L6 8"/></Icon>;
const GlobeIcon        = () => <Icon><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></Icon>;
const DerivativesIcon  = () => <Icon><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></Icon>;
const PoolsIcon        = () => <Icon><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></Icon>;
const EyeIcon          = () => <Icon><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></Icon>;
const ChartBarIcon     = () => <Icon><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></Icon>;
const StackIcon        = () => <Icon><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Icon>;
const BankIcon         = () => <Icon><line x1="3" y1="22" x2="21" y2="22"/><rect x="3" y="10" width="18" height="9"/><polygon points="12 2 2 10 22 10"/></Icon>;
const InfoIcon         = () => <Icon><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Icon>;
const PeopleIcon       = () => <Icon><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
const NewsIcon         = () => <Icon><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></Icon>;
const CareersIcon      = () => <Icon><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
const SupportIcon      = () => <Icon><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></Icon>;
const SecurityIcon     = () => <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>;
const StartupIcon      = () => <Icon><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Icon>;

/* ── Menu data ── */
const MENUS = {
	Individuals: {
		cols: [
			[
				{ icon: <BuySellIcon />,    title: 'Buy and sell',     desc: 'Buy, sell, and use crypto',                     href: '#' },
				   { icon: <AppIcon />,        title: 'Base App',         desc: 'Post, earn, trade, and chat, all in one place', href: 'https://join.base.app/' },
				   { icon: <OneIcon />,        title: 'Coinbase One',     desc: 'Get zero trading fees and more',                href: 'https://coinbase.com/one?referrer=logged_out' },
				{ icon: <DiamondIcon />,    title: 'Private Client',   desc: 'For trusts, family offices, UHNWIs',            href: '#' },
				{ icon: <ChainIcon />,      title: 'Onchain',          desc: 'Dive into the world of onchain apps',           href: '#' },
				   { icon: <LearnIcon />,      title: 'Learn',            desc: 'Crypto education and resources',                href: 'https://www.coinbase.com/learn' },
			],
			[
				   { icon: <AdvancedIcon />,   title: 'Advanced',         desc: 'Professional-grade trading tools',              href: 'https://www.coinbase.com/advanced-trade' },
				{ icon: <EarnIcon />,       title: 'Earn',             desc: 'Stake your crypto and earn rewards',            href: '#' },
				{ icon: <WealthIcon />,     title: 'Coinbase Wealth',  desc: 'Institutional-grade services for UHNW',         href: '#' },
				{ icon: <CreditCardIcon />, title: 'Credit Card',      desc: 'Earn up to 4% bitcoin back',                    href: '#' },
				{ icon: <WalletIcon />,     title: 'Debit Card',       desc: 'Spend crypto, get crypto back',                 href: '#' },
			],
		],
		featured: {
			image: <img src="https://static-assets.coinbase.com/marketing/2025-q4-event/navigation-upsell.png" alt="System Update 2025" className="w-full h-full object-cover" />,
			title: 'System Update 2025',
			description: 'The next chapter of Coinbase. Live on X 12/17.',
			linkText: 'Learn more',
			href: '#',
		},
	},

	Businesses: {
		cols: [
			[
				{ icon: <BusinessIcon />,  title: 'Business',        desc: 'Crypto trading and payments for startups and SMBs',          href: '#' },
				{ icon: <ListingsIcon />,  title: 'Asset Listings',  desc: 'List your asset on Coinbase',                                 href: '#' },
			],
			[
				{ icon: <PaymentsIcon />,  title: 'Payments',        desc: 'The stablecoin payments stack for commerce platforms',        href: '#' },
				{ icon: <TokenIcon />,     title: 'Token Manager',   desc: 'The platform for token distributions, vesting, and lockups', href: '#' },
			],
		],
		featured: {
			image: <img src="https://static-assets.coinbase.com/growth/acquisition/global-nav/onchain_payment_protocol.png" alt="Commerce Payments Protocol" className="w-full h-full object-cover" />,
			title: 'Commerce Payments Protocol',
			description: 'A new standard for onchain payments.',
			linkText: 'Go to Payments',
			href: '#',
		},
	},

	Institutions: {
		cols: [
			{
				header: { label: 'Prime', href: '#' },
				items: [
					{ icon: <ClockIcon />,       title: 'Trading and Financing', desc: 'Professional prime brokerage services',              href: '#' },
					{ icon: <ShieldIcon />,      title: 'Custody',               desc: 'Securely store all your digital assets',             href: '#' },
					{ icon: <PercentIcon />,     title: 'Staking',               desc: 'Explore staking across our products',                href: '#' },
					{ icon: <AppIcon />,         title: 'Onchain Wallet',        desc: 'Institutional-grade wallet to get onchain',          href: '#' },
				],
			},
			{
				header: { label: 'Markets' },
				items: [
					{ icon: <ExchangeIcon />,    title: 'Exchange',              desc: 'Spot markets for high-frequency trading',            href: '#' },
					{ icon: <GlobeIcon />,       title: 'International Exchange',desc: 'Access perpetual futures markets',                   href: '#' },
					{ icon: <DerivativesIcon />, title: 'Derivatives Exchange',  desc: 'Trade an accessible futures market',                 href: '#' },
					{ icon: <PoolsIcon />,       title: 'Verified Pools',        desc: 'Transparent, verified liquidity pools',              href: '#' },
				],
			},
		],
		featured: {
			image: <img src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/institutions_upsell.png" alt="Our clients" className="w-full h-full object-cover" />,
			title: 'Our clients',
			description: 'Trusted by institutions and government.',
			linkText: 'Learn more',
			href: '#',
		},
	},

	Developers: {
		cols: [
			{
				header: { label: 'Coinbase Developer Platform', href: '#' },
				items: [
					{ icon: <EyeIcon />,      title: 'Payments', desc: 'Fast and global stablecoin payments with a single integration',         href: '#' },
					{ icon: <ChartBarIcon />, title: 'Trading',  desc: 'Launch crypto trading and custody for your users',                       href: '#' },
					{ icon: <WalletIcon />,   title: 'Wallets',  desc: 'Deploy customizable and scalable wallets for your business',             href: '#' },
					{ icon: <EarnIcon />,     title: 'Stablecoins', desc: 'Access USDC and Coinbase Custom Stablecoins',                        href: '#' },
				],
			},
			{
				header: { label: 'Solutions for any company' },
				items: [
					{ icon: <BankIcon />,    title: 'Banks & Brokerages', desc: 'Secure, regulated offerings for retail, private banking, & institutional clients', href: '#' },
					{ icon: <PaymentsIcon />,title: 'Payment Firms',      desc: 'Near-instant, low-cost, global payment rails for modern providers',                href: '#' },
					{ icon: <StartupIcon />, title: 'Startups',           desc: "Launch your business with the world's leader in crypto",                           href: '#' },
				],
			},
		],
		featured: {
			image: <img src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/developers_upsell_cdxv2_2.jpg" alt="Developer platform" className="w-full h-full object-cover" />,
			title: 'World class crypto infrastructure.',
			description: "Discover Coinbase's complete crypto-as-a-service platform.",
			linkText: 'Learn more',
			href: '#',
		},
	},

	Company: {
		cols: [
			[
				{ icon: <InfoIcon />,    title: 'About',      desc: 'Powering the crypto economy',        href: '#' },
				{ icon: <PeopleIcon />, title: 'Affiliates', desc: 'Help introduce the world to crypto', href: '#' },
				{ icon: <NewsIcon />,   title: 'Blog',       desc: 'Read the latest from Coinbase',      href: '#' },
			],
			[
				{ icon: <CareersIcon />,  title: 'Careers',  desc: 'Work with us',                      href: '#' },
				{ icon: <SupportIcon />,  title: 'Support',  desc: 'Find answers to your questions',     href: '#' },
				{ icon: <SecurityIcon />, title: 'Security', desc: 'The most trusted & secure',          href: '#' },
			],
		],
		featured: {
			image: <img src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/company_upsell.png" alt="About Coinbase" className="w-full h-full object-cover" />,
			title: 'Learn all about Coinbase:',
			description: "We're building the open financial system.",
			linkText: 'Create your account',
			href: '#',
		},
	},
};

const navLinks = ['Cryptocurrencies', 'Individuals', 'Businesses', 'Institutions', 'Developers', 'Company'];

/* ── Dropdown content renderer ── */
const DropdownContent = ({ menuKey }) => {
	const menu = MENUS[menuKey];
	if (!menu) return null;

	// Determine if columns use section headers (Institutions / Developers)
	const hasSectionHeaders = menu.cols.length > 0 && menu.cols[0]?.header !== undefined;

	return (
		<div className="w-full max-w-[1228px] mx-auto px-8 lg:px-12 py-8">
			<div className="flex gap-12">
				{/* Two item columns */}
				<div className="flex gap-12 flex-1">
					{menu.cols.map((col, i) => (
						<div key={i} className="flex-1 min-w-0">
							{hasSectionHeaders ? (
								<>
									{col.header && (
										<NavSectionHeader href={col.header.href}>
											{col.header.label}
										</NavSectionHeader>
									)}
									<div className="flex flex-col">
										{col.items.map((item) => (
											<NavMenuItem key={item.title} {...item} />
										))}
									</div>
								</>
							) : (
								<div className="flex flex-col">
									{col.map((item) => (
										<NavMenuItem key={item.title} {...item} />
									))}
								</div>
							)}
						</div>
					))}
				</div>

				{/* Featured panel */}
				{menu.featured && (
					<div className="shrink-0 border-l border-gray-10 pl-12">
						<NavFeatured {...menu.featured} />
					</div>
				)}
			</div>
		</div>
	);
};

/* ── Header ── */
const Header = () => {
	const { user } = useAuth();
	const [activeMenu, setActiveMenu]   = useState(null);
	const [searchActive, setSearchActive] = useState(false);
	const [searchQuery, setSearchQuery]   = useState('');
	const [langOpen, setLangOpen]         = useState(false);
	const leaveTimer = useRef(null);
	const searchInputRef = useRef(null);

	const handleEnter = (link) => {
		if (searchActive) return;
		if (leaveTimer.current) clearTimeout(leaveTimer.current);
		if (MENUS[link]) setActiveMenu(link);
		else setActiveMenu(null);
	};

	const handleLeave = () => {
		leaveTimer.current = setTimeout(() => setActiveMenu(null), 120);
	};

	const handleDropdownEnter = () => {
		if (leaveTimer.current) clearTimeout(leaveTimer.current);
	};

	const openSearch = () => {
		setActiveMenu(null);
		setLangOpen(false);
		setSearchActive(true);
		setTimeout(() => searchInputRef.current?.focus(), 0);
	};

	const closeSearch = () => {
		setSearchActive(false);
		setSearchQuery('');
	};

	return (
		<header
			className="sticky top-0 z-50 bg-white border-b border-gray-10"
			onMouseLeave={!searchActive ? handleLeave : undefined}
		>
			<Container>
				<nav className="flex items-center justify-between h-16 gap-4">
					{/* Left: Logo + Nav — always visible */}
					<div className="flex items-center gap-6 shrink-0">
						<a href="/" className="flex-shrink-0">
							<Logo height={28} />
						</a>
						<ul className="hidden lg:flex items-center gap-1">
							{navLinks.map((link) => (
								<li key={link}>
									<a
										href="#"
										onMouseEnter={() => handleEnter(link)}
										className={`text-label-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
											activeMenu === link
												? 'text-blue-60 bg-gray-5'
												: 'text-gray-100 hover:bg-gray-5'
										}`}
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Right: Actions */}
					{searchActive ? (
						/* ── Search input (only replaces right buttons) ── */
						<div className="flex items-center gap-2">
							<div className="flex items-center gap-2 w-[300px] h-10 px-4 rounded-full border-2 border-blue-60 bg-white">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
									<path fill="#5B616E" d="M9.867 11.57a5.75 5.75 0 1 1 1.697-1.697l3.425 3.425-1.697 1.697zm.222-4.825a3.35 3.35 0 1 0-6.7 0 3.35 3.35 0 0 0 6.7 0"/>
								</svg>
								<input
									ref={searchInputRef}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									placeholder="Search"
									className="flex-1 text-[0.875rem] text-gray-100 placeholder:text-gray-40 outline-none bg-transparent"
								/>
							</div>
							<button
								onClick={closeSearch}
								className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-10 hover:bg-gray-15 transition-colors shrink-0"
							>
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
									<path stroke="#0A0B0D" strokeWidth="1.8" strokeLinecap="round" d="M1.5 1.5 10.5 10.5M10.5 1.5 1.5 10.5"/>
								</svg>
							</button>
						</div>
					) : (
						<div className="flex items-center gap-2">
							{/* Search — Coinbase icon, gray bg */}
							<button
								onClick={openSearch}
								className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-10 hover:bg-gray-15 transition-colors"
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path fill="#0A0B0D" d="M9.867 11.57a5.75 5.75 0 1 1 1.697-1.697l3.425 3.425-1.697 1.697zm.222-4.825a3.35 3.35 0 1 0-6.7 0 3.35 3.35 0 0 0 6.7 0"/>
								</svg>
							</button>

							{/* Globe — Coinbase icon, gray bg */}
							<div className="relative">
								<button
									onClick={() => setLangOpen(v => !v)}
									className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-10 hover:bg-gray-15 transition-colors"
								>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path fill="#0A0B0D" d="M14.99 7.995a7.002 7.002 0 1 1-14.003 0 7.002 7.002 0 0 1 14.003 0m-6.794 5.397h-.01c.253-1.037-.12-1.558-.516-2.11-.333-.465-.682-.951-.682-1.787v-1.5L2.736 6.733a5.4 5.4 0 0 0 5.46 6.66m3.788-1.762a5.38 5.38 0 0 0 1.406-3.635 5.4 5.4 0 0 0-2.4-4.492v.913H8.988v1.579h-1.5v1.5l4.5-.131v4.26z"/>
									</svg>
								</button>
								<AnimatePresence>
									{langOpen && <LanguageDropdown onClose={() => setLangOpen(false)} />}
								</AnimatePresence>
							</div>

							{user ? (
							<Link
								to="/dashboard"
								className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-blue-60 text-white hover:opacity-90 px-4 py-2 text-label-1 whitespace-nowrap"
							>
								Dashboard
							</Link>
						) : (
							<>
								<Link
									to="/signin"
									className="hidden sm:flex items-center h-10 px-4 text-[0.875rem] font-semibold text-gray-100 bg-gray-10 hover:bg-gray-15 rounded-full transition-colors whitespace-nowrap"
								>
									Sign in
								</Link>
								<Link
									to="/account-type"
									className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-blue-60 text-white hover:opacity-90 px-4 py-2 text-label-1 whitespace-nowrap"
								>
									Sign up
								</Link>
							</>
						)}

							{/* Mobile hamburger — Coinbase icon */}
							<button className="lg:hidden flex w-10 h-10 items-center justify-center rounded-full bg-gray-10 hover:bg-gray-15 transition-colors">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path fill="#0A0B0D" d="M3.989 3.995a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m2.5-8.5h10v-2h-10zm0 4h10v-2h-10zm0 4h10v-2h-10z"/>
								</svg>
							</button>
						</div>
					)}
				</nav>
			</Container>

			{/* Nav megamenu */}
			<div onMouseEnter={handleDropdownEnter}>
				<NavDropdown isOpen={!!activeMenu && !searchActive}>
					{activeMenu && <DropdownContent menuKey={activeMenu} />}
				</NavDropdown>
			</div>

			{/* Search dropdown */}
			<AnimatePresence>
				{searchActive && <SearchDropdown query={searchQuery} />}
			</AnimatePresence>
		</header>
	);
};

export default Header;
