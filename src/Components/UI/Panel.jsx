const Panel = (props) => {
    return (
        <div data-aos="fade-up" className={`mb-6 bg-slate-100 dark:bg-gray-200/10 shadow-md rounded-md p-12 ${props.className && props.className}`}>{props.children}</div>
    )
}

export default Panel