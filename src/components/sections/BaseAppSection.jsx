import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Logo from '../ui/Logo';
// Replaced ImagePlaceholder with a real image for the Base App screenshot

const BaseAppSection = () => {
	return (
		<section className="py-16 md:py-24 ">
			<Container>
				<div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
					{/* Right: Text (appears first on desktop via reverse) */}
					<div className="w-full md:w-1/2">
						<Badge className="mb-6">
							<Logo height={16} className="inline-block brightness-0" />
							BASE APP
						</Badge>
						<h2 className="text-display-3 md:text-display-2 text-gray-100 mb-4">
							Countless ways to earn crypto with the Base App.
						</h2>
						<p className="text-body text-gray-60 mb-8 max-w-lg">
							An everything app to trade, create, discover, and chat, all in one place.
						</p>
						<Button variant="tertiary" size="md">
							Learn more
						</Button>
					</div>

					{/* Left: Base App Screenshot */}
					<div className="w-full md:w-1/2 flex justify-center">
						<div
							className="relative w-full overflow-hidden flex items-center justify-center"
							style={{ aspectRatio: '5/4' }}
						>
							<picture>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png?fm=avif&w=1200&h=960&q=65"
									type="image/avif"
									width="1200"
									height="960"
								/>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png?fm=webp&w=1200&h=960&q=75"
									type="image/webp"
									width="1200"
									height="960"
								/>
								<img
									src="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png"
									alt="Base App screen"
									loading="lazy"
									width="1200"
									height="960"
									className="w-full h-full object-contain"
								/>
							</picture>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default BaseAppSection;
