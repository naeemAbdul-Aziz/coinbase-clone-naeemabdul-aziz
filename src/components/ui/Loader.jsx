import Logo from './Logo';

/* Coinbase full-screen loader — wordmark mono on dark bg */
const Loader = ({ fullScreen = true }) => {
	const content = (
		<div className="flex items-center justify-center">
			<div className="animate-[coinbase-pulse_1.6s_ease-in-out_infinite]">
				<Logo height={36} className="brightness-0 invert" />
			</div>
		</div>
	);

	if (!fullScreen) return content;

	return (
		<div className="fixed inset-0 z-[9999] bg-[#0A0B0D] flex items-center justify-center">
			{content}
		</div>
	);
};

export default Loader;
