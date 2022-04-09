import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Context } from '../Context'

const Contact = ({ icon, title, text, link, dataAos, dataAosDelay }) => {
    const { texts } = useContext(Context)

    return (
        <div data-aos={dataAos || ""} data-aos-delay={dataAosDelay || ""} data-aos-offset='650' data-aos-anchor='#contact' className='p-5 px-4 bg-slate-100 dark:bg-primary-dark dark:text-white border-[1px] border-white/10 shadow-md rounded-xl mb-5 w-full h-full flex justify-center items-center flex-col'>
            <FontAwesomeIcon className='text-cyan my-2 text-2xl' icon={ icon } />
            <h1 className='uppercase text-gray-900 dark:text-white text-sm mb-1'>{ title }</h1>
            <span dir='ltr' className='text-gray-900 dark:text-gray-300 font-light text-xs block mb-4'>{ text }</span>
            { link ? <a href={ link } target="_blank" rel="noreferrer" className='text-cyan font-light text-xs block uppercase'>{ texts.contact.message }</a> : "" }
        </div>
    )
}

export default Contact