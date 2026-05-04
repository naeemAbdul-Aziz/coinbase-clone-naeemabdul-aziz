const Loader = ({ fullScreen = true }) => {
	const dot = <span className="cb-loader" />;

	if (!fullScreen) {
		return (
			<div className="flex items-center justify-center py-4">
				{dot}
			</div>
		);
	}

	return (
		<div className="fixed inset-0 z-[9999] bg-[#0A0B0D] flex items-center justify-center">
			{dot}
		</div>
	);
};

export default Loader;
