const ImagePlaceholder = ({
	label = 'Image',
	aspectRatio = '4/3',
	className = '',
}) => {
	return (
		<div
			className={`
        relative w-full rounded-xl overflow-hidden
        bg-gray-10
        flex items-center justify-center
        ${className}
      `}
			style={{ aspectRatio }}
		>
			<span className="text-label-2 text-gray-40">{label}</span>
		</div>
	);
};

export default ImagePlaceholder;
