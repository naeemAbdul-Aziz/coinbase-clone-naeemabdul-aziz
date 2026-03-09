import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Logo from '../ui/Logo';

const CoinbaseOneSection = () => {
	return (
		<section className="py-16 md:py-24 bg-white">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
					{/* Left: Text */}
					<div className="w-full md:w-1/2">
						<Badge className="mb-6">
							<Logo height={16} className="inline-block brightness-0" />
							COINBASE ONE
						</Badge>
						<h2 className="text-display-3 md:text-display-2 text-gray-100 mb-4">
							Zero trading fees, more rewards.
						</h2>
						<p className="text-body text-gray-60 mb-8 max-w-lg">
							Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
						</p>
						<Button variant="tertiary" size="md">
							Claim free trial
						</Button>
					</div>

					<div className="w-full md:w-1/2 flex justify-center">
						<div className="w-full">
							<img
								src="https://images.ctfassets.net/o10es7wu5gm1/4CyfFj8M0X8tKnzh8AgdxT/f0fa52750499d9b1691f62880906ff3e/zero_fees_us.png?fm=avif&w=1320&h=1320&q=65"
								alt="Coinbase One mobile app"
								className="rounded-3xl shadow-elevation-2 w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default CoinbaseOneSection;
