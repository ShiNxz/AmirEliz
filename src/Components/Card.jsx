const Card = ({ children, className }) => {
    return (
        <div data-aos="fade-up" className={`backdrop-blur-xl shadow-lg outline outline-offset-0 outline-1 outline-neutral-200/25 mb-36 rounded-xl bg-gray-200/10 p-10 ${className && className}`}>
            { children }
        </div>
    )
}

export default Card