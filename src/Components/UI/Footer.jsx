import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import links from '../../Links'
import { useContext } from 'react';
import { Context } from './../../Context';

const Link = ({ link, icon }) =>
    <a href={link} rel="noreferrer" target='_blank' className="bg-neutral-900 hover:bg-neutral-800 duration-200 shadow-sm hover:shadow-lg p-2 my-4 mx-1 flex justify-center text-white rounded-md">
        <FontAwesomeIcon className='text-white text-md' icon={icon} />
    </a>

const Footer = () => {
    const { texts } = useContext(Context)

    return (
        <footer className="text-center py-20 bg-cyan2 dark:text-slate-200 shadow-md">
            <span className="uppercase text-lg text-neutral-900 font-[500] block duration-300 hover:tracking-[0.2em]">amir eliz</span>
            <div className="text-sm text-neutral-900 my-8 font-light block">
                {
                    links.map(l => <a className="text-gray-800 block md:inline-block hover:text-gray-900 underline decoration-2 decoration-gray-700/0 hover:decoration-gray-700 duration-300 px-3 py-2 rounded-md text-sm font-medium" key={l.id} href={l.id}>{l.icon ? <FontAwesomeIcon className="mx-2" icon={ l.icon } /> : ''}{texts.links[l.id]}</a>)
                }
            </div>
            <div className='flex justify-center my-4'>
                <Link link="https://www.instagram.com/amir.eliz/" icon={faInstagram} />
                <Link link="https://www.youtube.com/channel/UCK3gycp4I4beWd4U5RSVRrQ" icon={faYoutube} />
            </div>
            <span className="text-xs text-neutral-800 font-[500]">AmirEliz & StartApp © 2020-{ new Date().getFullYear() }</span>

        </footer>
    )
}

export default Footer