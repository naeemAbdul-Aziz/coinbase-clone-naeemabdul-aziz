import { Link } from 'react-router-dom';

const articles = [
	{
		id: 1,
		href: 'https://www.coinbase.com/usdc',
		title: 'USDC: The digital dollar for the global crypto economy',
		description:
			'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable. We co-founded the Centre Consortium in 2018 to invest in the build of USDC, and since then it has become the second largest stablecoin by market capitalization.',
		image:
			'https://images.ctfassets.net/o10es7wu5gm1/2tI0D7cX30gXudggzQc3tr/b6181107533f98f9dcc64da96efacff8/0_4mVyVaU6yLa--GR_',
		alt: 'Blue circle with USDC money symbol',
	},
	{
		id: 2,
		href: 'https://www.coinbase.com/learn/crypto-basics/can-crypto-really-replace-your-bank',
		title: 'Can crypto really replace your bank account?',
		description:
			'If you\'re a big enough fan of crypto, you\'ve probably heard the phrase "be your own bank" or the term "bankless" — the idea being that crypto can offer more control over your financial future than traditional finance. But how much of your financial life really can be accomplished via crypto?',
		image:
			'https://images.ctfassets.net/o10es7wu5gm1/2hqtyQztrvrBKvIizPZxaJ/42ad48711067c7d0ea45476331c20798/Replace_Bank.png',
		alt: 'Phone with a bank showing in the background',
	},
	{
		id: 3,
		href: 'https://www.coinbase.com/learn/tips-and-tutorials/dollar-cost-averaging',
		title: 'When is the best time to invest in crypto?',
		description:
			'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty, fear of missing out, or fear of participating at all. When prices are fluctuating, how do you know when to buy?',
		image:
			'https://images.ctfassets.net/o10es7wu5gm1/5mufjKMH84IDeb8A0EGrtH/0438eeae827ffef404b935407ae7d780/Learn_Illustration_Ultimate_Guide_Bitcoin.png',
		alt: 'Hand holding Bitcoin',
	},
];

/* ── Article card ── */
const ArticleCard = ({ article }) => (
	<div className="relative flex flex-col min-h-[320px] min-w-[260px]">
		{/* Full-card clickable overlay */}
		<a
			href={article.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={article.title}
			className="absolute inset-0 z-10 rounded-2xl transition-opacity duration-150 hover:opacity-[0.88]"
		/>

		{/* Image — 16:9 aspect ratio */}
		<div className="w-full shrink-0 rounded-2xl overflow-hidden bg-gray-15">
			<div className="w-full" style={{ aspectRatio: '16/9' }}>
				<img
					src={article.image}
					alt={article.alt}
					loading="lazy"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>

		{/* Text content */}
		<div className="flex flex-col gap-3 pt-4 flex-1">
			<h3 className="text-[1.125rem] leading-[1.5rem] font-semibold text-gray-100 line-clamp-3 m-0">
				{article.title}
			</h3>
			<p className="text-[0.875rem] leading-[1.375rem] font-normal text-gray-60 line-clamp-3 m-0">
				{article.description}
			</p>
		</div>
	</div>
);

/* ── Main section ── */
const LearnSection = () => (
	<section className="flex flex-col items-center bg-gray-10 w-full">
		<div className="w-full max-w-[1600px] px-6 py-12 md:px-8 md:py-16 md:max-w-[1228px] lg:px-12 lg:py-20 lg:max-w-[1600px]">

			{/* Section header — heading left, description + CTA right */}
			<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 md:mb-12">
				{/* Left: headline */}
				<div className="w-full md:max-w-[800px]">
					<h2 className="text-display-3 font-semibold text-gray-100 m-0">
						New to crypto?<br />Learn some crypto basics
					</h2>
				</div>

				{/* Right: description + button */}
				<div className="flex flex-col items-start gap-6 w-full md:max-w-[512px]">
					<p className="text-base leading-6 text-gray-60 m-0">
						Beginner guides, practical tips, and market updates for first-timers,
						experienced investors, and everyone in between
					</p>
					<Link
						to="/learn"
						className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-gray-100 text-white font-semibold text-[0.875rem] leading-5 no-underline transition-opacity duration-200 hover:opacity-[0.88] whitespace-nowrap"
					>
						Learn
					</Link>
				</div>
			</div>

			{/* Article card grid — 1 col mobile → 2 col tablet → 3 col desktop */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>

		</div>
	</section>
);

export default LearnSection;
