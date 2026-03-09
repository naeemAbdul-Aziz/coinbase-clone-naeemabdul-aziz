import { Link } from 'react-router-dom';
import CryptoTable from '../CryptoTable';

const ExploreCryptoSection = () => {
	return (
		<section className="flex flex-col items-center bg-gray-10 w-full">
			{/* Container — max-w-[1228px] on md, max-w-[1600px] on lg */}
			<div className="relative flex flex-col w-full max-w-[1600px] px-6 py-12 md:px-8 md:py-16 md:max-w-[1228px] lg:px-12 lg:py-20 lg:max-w-[1600px]">
				<div className="flex justify-center">
					<div className="flex flex-col md:flex-row items-center w-full gap-12">
						{/* Left: Text column */}
						<div className="flex flex-col w-full min-w-0 md:flex-1">
							<div className="flex flex-col gap-6 items-start">
								{/* Heading — t1 typography */}
								<h2 className="md:text-display-3 leading-[2.25rem] font-semibold  m-0">
									Explore crypto like Bitcoin, Ethereum, and Dogecoin.
								</h2>

								{/* Description — body muted */}
								<p className="text-base leading-6 font-normal text-gray-60 m-0">
									Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
								</p>

								{/* CTA Button — primary dark */}
								<Link
									to="/explore"
									className="inline-flex text-white items-center justify-center px-8 h-14  rounded-full bg-black font-semibold no-underline border-none cursor-pointer transition-opacity duration-150 hover:opacity-[0.88]"
								>
									See more assets
								</Link>
							</div>
						</div>

						{/* Right: Crypto table column */}
						<div className="block w-full min-w-0 md:flex-1">
							<CryptoTable />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExploreCryptoSection;
