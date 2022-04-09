const PanelBox = ({ children, dataAos, dataAosDelay }) => {
    return <div data-aos={dataAos || ""} data-aos-offset='750' data-aos-delay={dataAosDelay || ""} data-aos-anchor='#tech' className='h-auto mx-4 bg-slate-100 dark:bg-primary-dark p-10 rounded-2xl md:w-1/2 mb-4 shadow-lg'>
        { children }
    </div>
}

export default PanelBox