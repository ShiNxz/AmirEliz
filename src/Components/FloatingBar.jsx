import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import links from '../Links'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const FloatingBar = () => {
    const [selected, setSelected] = useState(false)

    const Link = ({ link, icon }) =>
        <a href={link} onClick={() => setSelected(link)} className={`duration-300 hover:bg-gray-400 dark:hover:bg-neutral-900 rounded-full text-white p-2 px-2.5 mx-1 flex justify-center ${selected === link && 'bg-gray-300 dark:bg-neutral-900'}`}>
            <FontAwesomeIcon className='text-gray-800 dark:text-white text-xl sm:text-base' icon={icon} />
        </a>

    return (
        <div dir='ltr' className='fixed z-50 w-full sm:w-fit right-0 left-0 sm:rounded-3xl bottom-0 sm:bottom-2 mx-auto p-2 bg-neutral-400/25 dark:bg-neutral-100/25 backdrop-blur-sm flex justify-evenly'>
            <Link link='#Main' icon={faHome} />
            {
                links.map(l => <Link key={l.id} link={l.id} icon={l.icon} />)
            }
        </div>
    )
}

export default FloatingBar