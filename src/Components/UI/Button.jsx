const Button = ({ children, className, outline, type, size, dataAos, dataAosDelay, dataAosOffset, dataAosAnchor, onClick }) => {

    return (
        <button data-aos-delay={dataAosDelay || ""} data-aos={dataAos || ""} data-aos-offset={dataAosOffset} data-aos-anchor={dataAosAnchor} className={`inline-block px-5 py-3 text-white font-medium text-xs leading-tight rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 hover:shadow-lg active:shadow-lg transition duration-300 ease-in-out ${className ? className : ''}
                bg-cyan hover:bg-cyan2 border-[1px] border-cyan focus:bg-cyan2
                ${outline && 'bg-cyan/0 border-[1px] border-cyan text-cyan hover:text-white focus:text-white hover:bg-cyan2 focus:outline-none'}
                ${size && size === 'sm' && '!px-3 !py-2'}
            `}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button