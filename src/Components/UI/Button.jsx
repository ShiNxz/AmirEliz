const Button = ({ loading, disabled, children, className, outline, type, size, dataAos, dataAosDelay, dataAosOffset, dataAosAnchor, onClick }) => {

    return (
        <button disabled={disabled} aria-label={children} data-aos-delay={dataAosDelay || ""} data-aos={dataAos || ""} data-aos-offset={dataAosOffset} data-aos-anchor={dataAosAnchor} className={`inline-block px-5 py-3 text-white font-medium text-xs leading-tight rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 hover:shadow-lg active:shadow-lg transition duration-300 ease-in-out ${className ? className : ''}
                bg-cyan hover:bg-cyan2 border-[1px] border-cyan focus:bg-cyan2
                ${outline && 'bg-cyan/0 border-[1px] border-cyan text-cyan hover:text-white focus:text-white hover:bg-cyan2 focus:outline-none'}
                ${size && size === 'sm' && '!px-3 !py-2'}
            `}
            type={type}
            onClick={onClick}
        >
            { loading ? <svg className="animate-spin h-3 w-3 ltr:mr-2 rtl:ml-2 text-white" viewBox="0 0 24 24"><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> : '' }
            {children}
        </button>
    )
}

export default Button