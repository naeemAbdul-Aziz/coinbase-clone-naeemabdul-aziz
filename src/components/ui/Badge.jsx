const Badge = ({ children, className = '' }) => {
	return (
		<span
			className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5
        rounded-pill
        border border-gray-20
        text-label-1 text-gray-100
        bg-white
        ${className}
      `}
		>
			{children}
		</span>
	);
};

export default Badge;
