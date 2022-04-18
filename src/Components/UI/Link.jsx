const Link = ({ children, className, outline, link, size, dataAos, dataAosDelay, dataAosOffset }) => {
    return (
        <div data-aos-delay={dataAosDelay || ""} data-aos={dataAos || ""} data-aos-offset={dataAosOffset}>
            <a className={`inline-block px-4 py-3 ${outline ? 'text-cyan' : 'text-white'} font-medium text-sm leading-tight rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 hover:shadow-lg active:shadow-lg transition duration-300 ease-in-out ${className ? className : ''}
                    bg-cyan hover:bg-cyan2 border-[1px] border-cyan focus:bg-cyan2
                    ${outline && 'bg-cyan/0 border-[1px] border-cyan text-cyan hover:text-white focus:text-white hover:bg-cyan2 focus:outline-none'}
                    ${size && size === 'sm' && '!px-3 !py-2'}
                `}
                href={link}
                target={`${link.startsWith("#") ? '_top' : '_blank'}`}
                rel="noreferrer"
            >
                {children}
            </a>
        </div>
    )
}

export default Link