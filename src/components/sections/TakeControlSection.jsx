import { useState } from 'react';

const TakeControlSection = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const target = `https://www.coinbase.com/signup${email ? `?email=${encodeURIComponent(email)}` : ''}`;
		window.open(target, '_blank', 'noopener,noreferrer');
	};

	return (
		<section className="flex flex-col items-center bg-white w-full">
			<div className="w-full max-w-[1600px] px-6 py-12 md:px-8 md:py-16 md:max-w-[1228px] lg:px-12 lg:py-20 lg:max-w-[1600px]">

				{/* Two-col layout — stacks on mobile, row on desktop */}
				<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

					{/* ── Left: heading + description + form ── */}
					<div className="flex flex-col gap-6 w-full lg:basis-1/2">
						{/* display-2 heading */}
						<h2 className="text-display-1 font-normal text-gray-100 m-0">
							Take control <br/> of your money
						</h2>

						<div className="flex flex-col gap-6 w-full max-w-[900px]">
							<p className="text-base leading-6 text-gray-100 m-0">
								Start your portfolio today and discover crypto
							</p>

							{/* Email form */}
							<form noValidate onSubmit={handleSubmit} className="w-full">
								<div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
									{/* Input — max 400px on sm+ */}
									<div className="w-full sm:max-w-[400px]">
										<input
											type="email"
											id="email-form-input"
											name="email"
											autoComplete="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="satoshi@nakamoto.com"
											aria-label="Email address"
											className="
												w-full h-12 px-4
												rounded-lg border border-gray-20
												bg-white text-gray-100 text-base
												outline-none
												hover:bg-gray-5 hover:border-gray-20
												focus:border-gray-100 focus:border-2
												transition-colors duration-150
												placeholder:text-gray-40
											"
										/>
									</div>

									{/* Submit button — full width on mobile, auto on sm+ */}
									<button
										type="submit"
										className="
											w-full sm:w-auto
											inline-flex items-center justify-center
											px-8 h-12 min-w-[100px]
											rounded-full bg-blue-60 text-white
											font-semibold text-[0.875rem] leading-5
											border-none cursor-pointer
											transition-opacity duration-150 hover:opacity-[0.88]
											whitespace-nowrap
										"
									>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* ── Right: crypto coins cluster image (1:1 aspect ratio) ── */}
					<div className="w-full lg:basis-1/2 flex items-center justify-center">
						<div className=" aspect-square">
							<picture>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png?fm=avif&h=3200&q=65"
									type="image/avif"
								/>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png?fm=webp&h=3200&q=75"
									type="image/webp"
								/>
								<img
									src="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png"
									alt="Coinbase Homepage Crypto Circle"
									loading="eager"
									width="4256"
									height="3200"
									className="w-full h-full object-contain"
								/>
							</picture>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default TakeControlSection;
