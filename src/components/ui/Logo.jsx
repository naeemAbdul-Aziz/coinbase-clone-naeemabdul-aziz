const Logo = ({ height = 28, className = '' }) => (
	<img
		src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
		alt="Coinbase"
		height={height}
		style={{ height: `${height}px`, width: 'auto', display: 'block' }}
		className={className}
	/>
);

export default Logo;
