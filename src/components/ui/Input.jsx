const Input = ({
	placeholder = '',
	type = 'email',
	className = '',
	...props
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`
        w-full px-4 py-3
        rounded-lg
        border border-gray-20
        bg-white text-gray-100
        text-body
        outline-none
        focus:border-blue-60
        transition-colors duration-200
        placeholder:text-gray-40
        ${className}
      `}
			{...props}
		/>
	);
};

export default Input;
