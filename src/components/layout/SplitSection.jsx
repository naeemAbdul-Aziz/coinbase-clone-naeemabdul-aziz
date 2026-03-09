import Container from './ui/Container';

const SplitSection = ({
	children,
	media,
	reverse = false,
	bg = 'bg-white',
	className = '',
}) => {
	return (
		<section className={`py-16 md:py-24 ${bg} ${className}`}>
			<Container>
				<div
					className={`
            flex flex-col gap-10 md:gap-16 items-center
            ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
          `}
				>
					{/* Media side */}
					<div className="w-full md:w-1/2 flex-shrink-0">
						{media}
					</div>

					{/* Content side */}
					<div className="w-full md:w-1/2">
						{children}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SplitSection;
