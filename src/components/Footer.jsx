import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import GlobalPreferencesModal from './ui/GlobalPreferencesModal';

/* ── Data ── */
const COLUMNS = [
	{
		id: 'col1',
		sections: [
			{
				title: 'Company',
				links: [
					{ label: 'About',                    href: 'https://www.coinbase.com/about' },
					{ label: 'Careers',                  href: 'https://www.coinbase.com/careers' },
					{ label: 'Affiliates',               href: 'https://www.coinbase.com/affiliates' },
					{ label: 'Blog',                     href: 'https://www.coinbase.com/blog' },
					{ label: 'Press',                    href: 'https://www.coinbase.com/press' },
					{ label: 'Security',                 href: 'https://www.coinbase.com/security' },
					{ label: 'Investors',                href: 'https://investor.coinbase.com/' },
					{ label: 'Vendors',                  href: 'https://www.coinbase.com/vendors/vendors-at-coinbase' },
					{ label: 'Legal & privacy',          href: 'https://www.coinbase.com/legal' },
					{ label: 'Cookie policy',            href: 'https://www.coinbase.com/legal/cookie' },
					{ label: 'Cookie preferences',       href: '#' },
					{ label: 'Digital Asset Disclosures',href: 'https://www.coinbase.com/legal/digital-asset-disclosures' },
				],
			},
			{
				title: 'Learn',
				links: [
					{ label: 'Explore',                        href: 'https://www.coinbase.com/explore' },
					{ label: 'Market statistics',              href: 'https://www.coinbase.com/market-stats' },
					{ label: 'Coinbase Bytes newsletter',      href: 'https://www.coinbase.com/bytes' },
					{ label: 'Crypto basics',                  href: 'https://www.coinbase.com/learn/crypto-basics' },
					{ label: 'Tips & tutorials',               href: 'https://www.coinbase.com/learn/tips-and-tutorials' },
					{ label: 'Crypto glossary',                href: 'https://www.coinbase.com/learn/crypto-glossary' },
					{ label: 'Market updates',                 href: 'https://www.coinbase.com/learn/market-updates' },
					{ label: 'What is Bitcoin?',               href: 'https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin' },
					{ label: 'What is crypto?',                href: 'https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency' },
					{ label: 'What is a blockchain?',          href: 'https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain' },
					{ label: 'How to set up a crypto wallet?', href: 'https://www.coinbase.com/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet' },
					{ label: 'How to send crypto?',            href: 'https://www.coinbase.com/learn/tips-and-tutorials/how-to-send-crypto' },
					{ label: 'Taxes',                          href: 'https://www.coinbase.com/learn/crypto-basics/understanding-crypto-taxes' },
				],
			},
		],
	},
	{
		id: 'col2',
		sections: [
			{
				title: 'Individuals',
				links: [
					{ label: 'Buy & sell',       href: 'https://www.coinbase.com/' },
					{ label: 'Earn free crypto', href: 'https://www.coinbase.com/learning-rewards' },
					{ label: 'Base App',         href: 'https://base.app' },
					{ label: 'Coinbase One',     href: 'https://www.coinbase.com/one' },
					{ label: 'Debit Card',       href: 'https://www.coinbase.com/card' },
				],
			},
			{
				title: 'Businesses',
				links: [
					{ label: 'Asset Listings',    href: 'https://www.coinbase.com/listings' },
					{ label: 'Coinbase Business', href: 'https://www.coinbase.com/business' },
					{ label: 'Payments',          href: 'https://www.coinbase.com/payments' },
					{ label: 'Commerce',          href: 'https://www.coinbase.com/commerce' },
					{ label: 'Token Manager',     href: 'https://www.coinbase.com/tokenmanager' },
				],
			},
			{
				title: 'Institutions',
				links: [
					{ label: 'Prime',                  href: 'https://www.coinbase.com/prime' },
					{ label: 'Staking',                href: 'https://www.coinbase.com/staking' },
					{ label: 'Exchange',               href: 'https://www.coinbase.com/exchange' },
					{ label: 'International Exchange', href: 'https://www.coinbase.com/international-exchange' },
					{ label: 'Derivatives Exchange',   href: 'https://www.coinbase.com/derivatives' },
					{ label: 'Verified Pools',         href: 'https://www.coinbase.com/verified-pools' },
				],
			},
		],
	},
	{
		id: 'col3',
		sections: [
			{
				title: 'Developers',
				links: [
					{ label: 'Developer Platform',            href: 'https://www.coinbase.com/developer-platform' },
					{ label: 'Base',                          href: 'https://base.org' },
					{ label: 'Server Wallets',                href: 'https://www.coinbase.com/developer-platform/products/wallets' },
					{ label: 'Embedded Wallets',              href: 'https://www.coinbase.com/developer-platform/products/embeddedwallets' },
					{ label: 'Base Accounts (Smart Wallets)', href: 'https://www.base.org/build/base-account' },
					{ label: 'Onramp & Offramp',              href: 'https://www.coinbase.com/developer-platform/products/onramp' },
					{ label: 'x402',                          href: 'https://www.x402.org' },
					{ label: 'Trade API',                     href: 'https://www.coinbase.com/developer-platform/products/trade-api' },
					{ label: 'Paymaster',                     href: 'https://www.coinbase.com/developer-platform/products/paymaster' },
					{ label: 'OnchainKit',                    href: 'https://www.base.org/build/onchainkit' },
					{ label: 'Data API',                      href: 'https://www.coinbase.com/developer-platform/products/data-api' },
					{ label: 'Verifications',                 href: 'https://www.coinbase.com/developer-platform/products/verifications' },
					{ label: 'Node',                          href: 'https://www.coinbase.com/developer-platform/products/node' },
					{ label: 'AgentKit',                      href: 'https://www.coinbase.com/developer-platform/products/agentkit' },
					{ label: 'Staking',                       href: 'https://www.coinbase.com/developer-platform/products/staking' },
					{ label: 'Faucet',                        href: 'https://www.coinbase.com/developer-platform/products/faucet' },
					{ label: 'Exchange API',                  href: 'https://www.coinbase.com/developer-platform/products/exchange-api' },
					{ label: 'International Exchange API',    href: 'https://docs.cdp.coinbase.com/international-exchange/introduction/welcome' },
					{ label: 'Prime API',                     href: 'https://docs.cdp.coinbase.com/prime/introduction/welcome' },
					{ label: 'Derivatives API',               href: 'https://docs.cdp.coinbase.com/derivatives/introduction/welcome' },
				],
			},
		],
	},
	{
		id: 'col4',
		sections: [
			{
				title: 'Support',
				links: [
					{ label: 'Help center',         href: 'https://help.coinbase.com' },
					{ label: 'Contact us',          href: 'https://help.coinbase.com/contact-us/' },
					{ label: 'Create account',      href: 'https://help.coinbase.com/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account/' },
					{ label: 'ID verification',     href: 'https://help.coinbase.com/coinbase/managing-my-account#identity-verification/' },
					{ label: 'Account information', href: 'https://help.coinbase.com/coinbase/managing-my-account/' },
					{ label: 'Payment methods',     href: 'https://help.coinbase.com/coinbase/getting-started#add-a-payment-method/' },
					{ label: 'Account access',      href: 'https://help.coinbase.com/coinbase/managing-my-account/' },
					{ label: 'Supported crypto',    href: 'https://help.coinbase.com/supported-crypto.html' },
					{ label: 'Status',              href: 'https://status.coinbase.com' },
				],
			},
			{
				title: 'Asset prices',
				links: [
					{ label: 'Bitcoin price',  href: 'https://www.coinbase.com/price/bitcoin' },
					{ label: 'Ethereum price', href: 'https://www.coinbase.com/price/ethereum' },
					{ label: 'Solana price',   href: 'https://www.coinbase.com/price/solana' },
					{ label: 'XRP price',      href: 'https://www.coinbase.com/price/xrp' },
				],
			},
			{
				title: 'Stock prices',
				links: [
					{ label: 'NVIDIA price',    href: 'https://www.coinbase.com/stock/nvda' },
					{ label: 'Apple price',     href: 'https://www.coinbase.com/stock/aapl' },
					{ label: 'Microsoft price', href: 'https://www.coinbase.com/stock/msft' },
					{ label: 'Amazon price',    href: 'https://www.coinbase.com/stock/amzn' },
				],
			},
		],
	},
];

const SOCIALS = [
	{ label: 'X',         href: 'https://x.com/coinbase',                   icon: 'https://static-assets.coinbase.com/marketing/cdx/x-light.svg' },
	{ label: 'LinkedIn',  href: 'https://www.linkedin.com/company/coinbase', icon: 'https://static-assets.coinbase.com/marketing/cdx/linkedin-light.svg' },
	{ label: 'Instagram', href: 'https://www.instagram.com/coinbase/',       icon: 'https://static-assets.coinbase.com/marketing/cdx/instagram-light.svg' },
	{ label: 'TikTok',    href: 'https://www.tiktok.com/@coinbase',          icon: 'https://static-assets.coinbase.com/marketing/cdx/tiktok-light.svg' },
];

/* ── Sub-components ── */
const FooterSection = ({ title, links }) => (
	<div className="flex flex-col gap-3">
		<span className="text-[0.875rem] leading-5 font-semibold text-gray-100">{title}</span>
		<div className="flex flex-col gap-2">
			{links.map((link) => (
				<a
					key={link.label}
					href={link.href}
					target={link.href.startsWith('http') ? '_blank' : undefined}
					rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
					className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors duration-150"
				>
					{link.label}
				</a>
			))}
		</div>
	</div>
);

const CoinbaseLogo = ({ height = 60 }) => (
	<img
		src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
		alt="Coinbase"
		height={height}
		style={{ height: `${height}px`, width: 'auto', display: 'block' }}
	/>
);

/* ── Footer ── */
const Footer = () => {
	const [modalOpen, setModalOpen]   = useState(false);
	const [country, setCountry]       = useState('Global');
	const [language, setLanguage]     = useState('English');

	return (
		<footer className="flex flex-col items-center bg-gray-10 w-full">
			<div className="w-full max-w-[1600px] pt-12 pb-8 md:px-8 md:pt-16 md:max-w-[1228px] lg:px-12 lg:pt-20 lg:max-w-[1600px]">

				{/* Logo — mobile only */}
				<div className="mb-8 lg:hidden">
					<CoinbaseLogo />
				</div>

				{/* Main columns row */}
				<div className="flex flex-col lg:flex-row gap-10">
					{/* Logo column — desktop only */}
					<div className="hidden lg:flex flex-col shrink-0 w-[72px] pt-0.5">
						<CoinbaseLogo />
					</div>

					{/* 4 content columns */}
					{COLUMNS.map((col) => (
						<div key={col.id} className="flex flex-col gap-10 flex-1">
							{col.sections.map((section) => (
								<FooterSection key={section.title} title={section.title} links={section.links} />
							))}
						</div>
					))}
				</div>

				{/* Bottom area */}
				<div className="flex flex-col gap-4 mt-12">
					{/* Social icons */}
					<div className="flex items-center gap-4">
						{SOCIALS.map((s) => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								title={`Coinbase ${s.label} page`}
								className="opacity-100 hover:opacity-70 transition-opacity duration-150"
							>
								<img src={s.icon} alt={`${s.label} logo`} width={16} height={16} loading="lazy" />
							</a>
						))}
					</div>

					{/* Divider */}
					<hr className="w-full border-0 border-t border-gray-15 my-2" />

					{/* Copyright + legal + locale row */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
						{/* Left: copyright + legal links */}
						<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
							<p className="text-[0.8125rem] leading-5 text-gray-100 m-0">
								© {new Date().getFullYear()} Coinbase
							</p>
							<span className="text-gray-40 text-[0.8125rem]">•</span>
							<a href="https://www.coinbase.com/legal/privacy" className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors">
								Privacy
							</a>
							<span className="text-gray-40 text-[0.8125rem]">•</span>
							<a href="https://www.coinbase.com/legal/user_agreement" className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors">
								Terms &amp; Conditions
							</a>
						</div>

						{/* Right: locale selector button */}
						<button
							onClick={() => setModalOpen(true)}
							className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-60">
								<circle cx="12" cy="12" r="10" />
								<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
								<path d="M2 12h20" />
							</svg>
							<span className="text-[0.8125rem] leading-5 text-gray-60">{country}</span>
							<span className="text-gray-40 text-[0.8125rem]">•</span>
							<span className="text-[0.8125rem] leading-5 text-gray-60">{language}</span>
						</button>
					</div>
				</div>
			</div>

			{/* Global Preferences Modal */}
			<AnimatePresence>
				{modalOpen && (
					<GlobalPreferencesModal
						onClose={() => setModalOpen(false)}
						country={country}
						language={language}
						onCountryChange={setCountry}
						onLanguageChange={setLanguage}
					/>
				)}
			</AnimatePresence>
		</footer>
	);
};

export default Footer;
