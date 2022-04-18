import Link from './UI/Link'
import { Context } from '../Context'
import { useContext } from 'react'

const Tag = ({ children }) => <div className="text-[0.60rem] ltr:mr-1 rtl:ml-1 mt-1 py-0.5 px-2 text-gray-600 bg-blue-100 rounded-2xl">{ children }</div>

const Project = ({ title, description, image, techs, links, dataAosOffset, dataAos, dataAosDelay }) => {
    const { texts } = useContext(Context)

    return (
        <div data-aos-delay={dataAosDelay || ""} data-aos={dataAos || ""} data-aos-offset={dataAosOffset || ""} data-aos-anchor="#projects">
            <div className="overflow-hidden relative shadow-md duration-500 hover:shadow-xl hover:-translate-y-1 rounded-lg cursor-pointer m-auto mx-0 w-full h-full block text-left">
                <img alt={title} src={image} className="max-h-40 w-full object-cover"/>
                <div className="bg-slate-100 dark:bg-primary-dark w-full p-4 h-72">
                    <p className="text-gray-800 dark:text-white text-lg font-medium mb-2">
                        { title }
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-light text-base rtl:text-right">
                        { description }
                    </p>
                    <div className='absolute bottom-4'>
                        <div className="flex flex-wrap justify-starts items-center mt-4">
                            {
                                techs.map(t => <Tag key={t}>{ t }</Tag>)
                            }
                        </div>
                        <div className="flex flex-wrap justify-starts items-center mt-5 ">
                            { links.live && <Link className='ltr:mr-2 rtl:ml-2' link={links.live} size='sm'>{ texts.projects.links.live }</Link> }
                            { links.demo && <Link className='ltr:mr-2 rtl:ml-2' link={links.demo} size='sm'>{ texts.projects.links.demo }</Link> }
                            { links.repository && <Link outline link={links.repository} size='sm'>{ texts.projects.links.repository }</Link> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project