import { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SubscribePopup from '../components/SubscribePopup';
import LearnCard from '../components/LearnCard';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnPage() {
	const [showPopup, setShowPopup] = useState(true);

	// Lock scroll when popup is open
	useEffect(() => {
		if (showPopup) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [showPopup]);

	// Scroll to Top on Mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const popularArticles = [
		{ title: 'What is cryptocurrency?', label: 'Beginner\'s Guide' },
		{ title: 'How to earn crypto rewards', label: 'Getting Started' },
		{ title: 'How to add crypto to your Coinbase Wallet', label: 'Getting Started' },
		{ title: 'Tax forms, explained: A guide to U.S. tax forms and crypto reports', label: 'Your crypto' },
		{ title: 'Beginner’s guide to dapps', label: 'Getting Started' },
		{ title: 'Everything you need to know about the first-ever U.S. Bitcoin ETF', label: 'Market Update' }
	];

	const cryptoBasics = [
		{ label: "Beginner's Guide", title: "What is Bitcoin?", description: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.", image: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png", href: "#" },
		{ label: "Beginner's Guide", title: "Guide to DeFi tokens and altcoins", description: "From Aave to Zcash, decide what to trade with our beginner's guide", image: "https://images.ctfassets.net/q5ulk4bp65r7/3rv8jr1B1Z1dZ2EhHqo7dp/e74ddbf1cd4836b83d34fe5cec351d78/Alt-Coin.png?w=768&fm=png", href: "#" },
		{ label: "Beginner's guide", title: "What is Ethereum?", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png", href: "#" },
		{ label: "Key term", title: "What is DeFi?", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg?w=768&fm=png", href: "#" },
		{ label: "Beginner's Guide", title: "What is a stablecoin?", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/3hETt7h2hfvnOnVVrJIvlO/b7204c2b9a1a35d39d0dd396d2cf49bb/Learn_Illustration_What_is_a_stablecoin.jpg?w=768&fm=png", href: "#" },
		{ label: "Glossary", title: "Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained", description: "Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained", image: "https://images.ctfassets.net/q5ulk4bp65r7/5fZ31B0CLFBDfIWK3DQPTN/b98e564a067cbb252995d654006cee09/Group_31612615.png?w=768&fm=png", href: "#" },
	];

	const whatIs = [
		{ label: "Bitcoin", title: "What is..." },
		{ label: "Blockchain", title: "What is..." },
		{ label: "Cardano", title: "What is..." },
		{ label: "Crypto wallet", title: "What is..." },
		{ label: "DeFi", title: "What is..." },
		{ label: "Ethereum", title: "What is..." },
		{ label: "Fork", title: "What is..." },
		{ label: "Inflation", title: "What is..." },
		{ label: "Market cap", title: "What is..." },
		{ label: "NFT", title: "What is..." },
		{ label: "Private key", title: "What is..." },
		{ label: "Protocol", title: "What is..." },
		{ label: "Smart contract", title: "What is..." },
		{ label: "Token", title: "What is..." },
		{ label: "Volatility memecoin", title: "What is..." }
	];

	const tipsAndTutorials = [
		{ label: "Getting Started", title: "How to donate crypto", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/63o0Mbwyiqcqq8CLZKToLs/4d007f0923a20999c6c4765d6fdc35bf/Donating-Crypto.png?w=768&fm=png", href: "#" },
		{ label: "Video Tutorial", title: "How to set up a crypto wallet", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png", href: "#" },
		{ label: "Video Tutorial", title: "When is the best time to invest in crypto?", description: "Learn how to setup and get started with a crypto wallet.", image: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png", href: "#" },
		{ label: "Your crypto", title: "How to invest in crypto via your retirement account", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/5Crc40l3fe9Mm22C4HGRgx/71defd6861e1ee2c4927e709604ea099/Crypto___Retirement_Op2-D.png?w=768&fm=png", href: "#" },
	];

	const advancedTrading = [
		{ label: "Key term", title: "What is technical analysis?", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/50bz6qkc8hSzqqHhbiMtKb/1e4d3f35ff2cd049580a4eb20f861a6e/Learn_Illustration_What_is_Technical_Analysis__1_.png?w=768&fm=png", href: "#" },
		{ label: "Advanced Guide", title: "How can I use crypto futures market data for spot trading?", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/4zm6shyv9LYK0W74kUrMQ4/2ecc82c8215405ecfba08f1f652095a6/charting-indicators.png?w=768&fm=png", href: "#" },
		{ label: "Advanced guide", title: "How to read advanced trading charts", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/1As6H6C4F2KcJsyLzzWPgX/7b13a011336a72f1f90f5d87bf32eee7/advance-trading.png?w=768&fm=png", href: "#" },
		{ label: "Key term", title: "What is an order book?", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/4q6K5epqo9YLwaQ79i1M5N/9693bdbae13fffb3c37406d71f294244/order-book__1_.png?w=768&fm=png", href: "#" }
	];

	const futures = [
		{ label: "Futures", title: "Futures: Introductions and origins", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/7mOyQ8m1ax3GFyzTSIENQy/2977ec18240fcc1851eb4a460a5915c3/Article_1_-_Visual_-_1.png?w=768&fm=png", href: "#" },
		{ label: "Futures", title: "Futures fundamentals: Understanding the basics", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/P1YwgqZX7jfnJ0l1xdbED/7a1d8654bf047462d68a377f7d21f39c/Article_2_-_Visual_-_1.png?w=768&fm=png", href: "#" },
		{ label: "Futures", title: "Opening, holding, and closing a position in the futures market", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/3REMTvIb9OoMmr8EPya1zU/f06976781a368ab76f5fa4b3edfdcc66/Article_3_-_Visual_-_1.png?w=768&fm=png", href: "#" },
		{ label: "Futures", title: "Trading strategies: Speculating, hedging, and spreading in the futures market", description: "", image: "https://images.ctfassets.net/q5ulk4bp65r7/EnVSYIBpxhx5Aicjq3A8f/08d26b8be710727725c2523746a710de/Article_4_-_Visual_-_1.png?w=768&fm=png", href: "#" }
	];

	const allThingsWallet = [
		{ label: "Wallet", title: "What’s the difference between Coinbase and Coinbase Wallet?", description: "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered", image: "https://images.ctfassets.net/q5ulk4bp65r7/3mfq3iIdYW3CDfWoh5vm9j/e79252903418650aa29f66ee313ef44e/How_to_Coinbase_Wallet_Op1-B.png?w=768&fm=png", href: "#" },
		{ label: "Video Tutorial", title: "How to set up a crypto wallet", description: "Learn how to setup and get started with a crypto wallet.", image: "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png", href: "#" },
		{ label: "Getting Started", title: "How to add crypto to your Coinbase Wallet", description: "A quick guide on how to add crypto to your Coinbase self-custody wallet.", image: "https://images.ctfassets.net/q5ulk4bp65r7/3G50jPNvtkBsSz7we9TaxK/a50e3a2103bad2af0355644349e57476/how_to_fund_coinbase_wallet.png?w=768&fm=png", href: "#" },
		{ label: "Wallet", title: "How to send or receive crypto using Coinbase Wallet", description: "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.", image: "https://images.ctfassets.net/q5ulk4bp65r7/4ktmMla57tgU3ZYleBOlLm/71ef298196ffcf1d1eb6d2b43abe49d4/Learn_Illustration_How_to_Send_Crypto.png?w=768&fm=png", href: "#" }
	];

	return (
		<div className="min-h-screen flex flex-col bg-white">
			<Header />

			{showPopup && <SubscribePopup onClose={() => setShowPopup(false)} />}

			<main className="flex-1 mt-[72px]">
				{/* Hero Section */}
				<section className="py-16 md:py-24 px-6 w-full max-w-[1200px] mx-auto">
					<h1 className="text-4xl md:text-[56px] leading-[1.1] font-display font-medium text-black mb-6">
						Crypto questions, answered
					</h1>
					<p className="text-gray-60 text-xl font-body max-w-2xl">
						Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
					</p>
				</section>

				{/* Featured Section */}
				<section className="py-12 px-6 w-full max-w-[1200px] mx-auto border-t border-gray-15">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-display font-medium mb-8 text-black">Featured</h2>

							<a href="#" className="group block relative rounded-2xl overflow-hidden bg-gray-5 border border-transparent hover:border-gray-20 transition-all shadow-sm hover:shadow-md">
								<div className="aspect-video w-full relative overflow-hidden">
									<img
										src="https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png"
										alt="Dollar cost averaging"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors flex items-center justify-center">
										<div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center text-blue-60 shadow-[0_0_30px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform">
											<PlayCircle size={32} fill="currentColor" className="text-blue-60" />
										</div>
									</div>
								</div>
								<div className="p-6 md:p-8 bg-white transition-colors">
									<span className="text-sm font-semibold text-gray-60 tracking-wider uppercase mb-3 block">
										Video Tutorial
									</span>
									<h3 className="text-3xl font-display font-medium text-black mb-4 group-hover:text-blue-60 transition-colors">
										When is the best time to invest in crypto?
									</h3>
									<p className="text-lg text-gray-60">
										When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
									</p>
								</div>
							</a>
						</div>

						<div>
							<h2 className="text-2xl font-display font-medium mb-8 text-black">Popular</h2>
							<div className="flex flex-col">
								{popularArticles.map((article, i) => (
									<div key={i} className="flex flex-col">
										<a href="#" className="group py-4">
											<span className="text-xs font-semibold text-gray-50 tracking-wider uppercase mb-1 block">{article.label}</span>
											<h4 className="text-lg font-medium text-black group-hover:text-blue-60 transition-colors">{article.title}</h4>
										</a>
										{i < popularArticles.length - 1 && <div className="h-px bg-gray-15 w-full"></div>}
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Crypto Basics */}
				<section className="py-16 px-6 w-full max-w-[1200px] mx-auto border-t border-gray-15">
					<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
						<div>
							<h2 className="text-3xl font-display font-medium mb-3 text-black">Crypto basics</h2>
							<p className="text-gray-60 text-lg">New to crypto? Not for long — start with these guides and explainers</p>
						</div>
						<Link to="/learn/crypto-basics" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{cryptoBasics.map((item, i) => (
							<div key={i} className="flex h-full">
								<LearnCard {...item} />
							</div>
						))}
					</div>
				</section>

				{/* What is... */}
				<section className="py-24 px-6 w-full mx-auto bg-gray-5 border-t border-gray-15">
					<div className="max-w-[800px] mx-auto">
						<div className="mb-12 text-center">
							<h2 className="text-[40px] font-display font-medium text-black">What is...</h2>
						</div>

						<div className="flex flex-wrap justify-center gap-4 mb-12">
							{whatIs.map((item, i) => (
								<a
									key={i}
									href="#"
									className={`px-5 py-3 bg-white rounded-lg shadow-sm border border-transparent hover:border-gray-20 transition-all text-[15px] font-medium ${item.label === 'Crypto wallet' ? 'text-blue-60' : 'text-black hover:text-blue-60'
										}`}
								>
									{item.label}
								</a>
							))}
						</div>

						<div className="flex justify-center">
							<a href="#" className="px-6 py-3 bg-blue-60 text-white font-medium rounded-lg hover:bg-blue-70 transition-colors">
								See more
							</a>
						</div>
					</div>
				</section>

				{/* Tips and Tutorials */}
				<section className="py-16 px-6 w-full max-w-[1200px] mx-auto border-t border-gray-15">
					<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
						<div>
							<h2 className="text-3xl font-display font-medium mb-3 text-black">Tips and tutorials</h2>
							<p className="text-gray-60 text-lg">Get practical, step-by-step answers to all things crypto</p>
						</div>
						<a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{tipsAndTutorials.map((item, i) => (
							<div key={i} className="flex h-full">
								<LearnCard {...item} />
							</div>
						))}
					</div>
				</section>

				{/* Advanced Trading */}
				<section className="py-16 px-6 w-full max-w-[1200px] mx-auto border-t border-gray-15">
					<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
						<div>
							<h2 className="text-3xl font-display font-medium mb-3 text-black">Advanced trading</h2>
							<p className="text-gray-60 text-lg">Ready to advance? Learn the tools and terminology you need to take control of your trades.</p>
						</div>
						<a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{advancedTrading.map((item, i) => (
							<div key={i} className="flex h-full">
								<LearnCard {...item} />
							</div>
						))}
					</div>
				</section>

				{/* Futures */}
				<section className="py-16 px-6 w-full max-w-[1200px] mx-auto border-t border-gray-15">
					<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
						<div>
							<h2 className="text-3xl font-display font-medium mb-3 text-black">Futures</h2>
							<p className="text-gray-60 text-lg">New to futures trading? Get up to speed on the basics.</p>
						</div>
						<a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{futures.map((item, i) => (
							<div key={i} className="flex h-full">
								<LearnCard {...item} />
							</div>
						))}
					</div>
				</section>

				{/* All Things Wallet */}
				<section className="py-16 px-6 w-full max-w-[1200px] mx-auto border-t border-gray-15">
					<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
						<div>
							<h2 className="text-3xl font-display font-medium mb-3 text-black">All Things Wallet</h2>
							<p className="text-gray-60 text-lg">Earn yield, dive into crypto apps, control your holdings, and much more</p>
						</div>
						<a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{allThingsWallet.map((item, i) => (
							<div key={i} className="flex h-full">
								<LearnCard {...item} />
							</div>
						))}
					</div>
				</section>

			</main>

			<Footer />
		</div>
	);
}
