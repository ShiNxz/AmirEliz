import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feature = ({ icon, title, text, dataAos, dataAosDelay }) =>
    <div data-aos={dataAos || ""} data-aos-delay={dataAosDelay || ""} data-aos-anchor='#AboutMe' className='p-8 px-6 bg-slate-100 dark:bg-primary-dark dark:text-white border-[1px] border-white/10 shadow-md rounded-xl ltr:mr-5 rtl:ml-5 mb-5 w-full text-center'>
        <FontAwesomeIcon className='text-cyan my-2 text-2xl' icon={icon} />
        <h1 className='uppercase text-gray-900 dark:text-white text-sm mb-0.5'>{ title }</h1>
        <span className='text-gray-900 dark:text-gray-300 font-light text-xs'>{ text }</span>
    </div>

export default Feature