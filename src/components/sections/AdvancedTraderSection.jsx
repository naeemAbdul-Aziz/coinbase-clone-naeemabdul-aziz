import Container from '../ui/Container';
import Button from '../ui/Button';

const AdvancedTraderSection = () => {
	return (
		<section className="py-16 md:py-24 ">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
					{/* Left: Trading Platform Image */}
					<div className="w-full md:w-1/2">

						<img
							src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png?fm=avif&w=2014&h=1612&q=65"
							alt="Advanced Trading Platform"
							className="w-full h-auto rounded-2xl shadow-2xl"
						/>

					</div>

					{/* Right: Text */}
					<div className="w-full md:w-1/2">
						<h2 className="text-display-3 md:text-display-2  mb-4">
							Powerful tools, designed for the advanced trader.
						</h2>
						<p className="text-body text-gray-40 mb-8 max-w-lg">
							Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
						</p>
						<Button variant="secondary" size="md" className="!bg-black !text-white hover:!bg-gray-80">
							Start trading
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AdvancedTraderSection;
