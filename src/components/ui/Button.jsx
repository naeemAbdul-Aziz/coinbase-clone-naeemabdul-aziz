const variants = {
	primary: 'bg-blue-60 text-white hover:opacity-90',
	secondary: 'bg-gray-10 text-gray-100 hover:bg-gray-15',
	tertiary: 'bg-gray-100 text-white hover:opacity-90',
	outline: 'bg-transparent text-gray-100 border border-gray-20 hover:bg-gray-5',
	yellow: 'bg-yellow-30 text-gray-100 hover:opacity-90',
};

const sizes = {
	sm: 'px-4 py-2 text-label-1',
	md: 'px-6 py-3 text-headline',
	lg: 'px-8 py-4 text-headline',
};

const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	...props
}) => {
	return (
		<button
			className={`
        inline-flex items-center justify-center
        rounded-pill font-semibold
        transition-all duration-200 cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
