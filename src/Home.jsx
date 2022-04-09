// Imports
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from './Context'

// Json
import techs from './Techs'
import projects from './Projects'
import contacts from './Contacts'

// Components
import Project from './Components/Project'
import Link from './Components/UI/Link'
import Block from './Components/UI/Block'
import PanelBox from './Components/UI/PanelBox'
import Feature from './Components/Feature'
import Contact from './Components/Contact'

// Assets
import me from './Assets/me.jpg'
import ContactForm from './Components/ContactForm'

const Index = () => {
    const { lang, texts } = useContext(Context)

    return (
        <>
            <Block id="Main">
                <div className='py-24'>
                    <h1 data-aos="fade-up" data-aos-delay="100" className='text-md text-gray-900 dark:text-white my-0.5 duration-300'>{ texts.main.heading }</h1>
                    <h1 data-aos="fade-up" data-aos-delay="400" className='text-5xl text-gray-800 dark:text-white duration-300 font-medium'>{ texts.main.name }</h1>
                    <h1 data-aos="fade-up" data-aos-delay="700" className='text-sm text-gray-900 dark:text-white my-1 duration-300'>{ texts.main.title }</h1>
                    <div className='my-5'>
                        <Link dataAos="fade-up" dataAosDelay="1400" link="#AboutMe" className='mx-1'>{ texts.links['#AboutMe'] }</Link>
                        <Link dataAos="fade-up" dataAosDelay="1500" outline link="#contact" className='mx-1'>{ texts.links['#letstalk'] }</Link>
                    </div>
                </div>
            </Block>
            
            <Block id="AboutMe">
                <div className='p-6 flex flex-col lg:flex-row'>
                    <div className='h-auto md:w-1/2 hidden lg:block'>
                        <div data-aos="fade-up" className='relative h-full flex justify-center items-center'>
                            <div className='rounded-2xl bg-gradient-to-r from-cyan2 via-cyan to-cyan2 shadow-xl -rotate-[5deg] absolute h-96 w-96 m-auto'/>
                            <img src={me} className='rounded-2xl rotate-6 absolute shadow-xl h-96 w-96 m-auto' alt="" />
                        </div>
                    </div>
                    <div className='h-fit lg:w-1/2 text-left rtl:text-right'>
                        <div className='flex flex-col mx-4 sm:mx-0 sm:flex-row p-2'>
                        {
                            texts.about_me.blocks.map((block, index) => <Feature key={block.title} dataAos="fade-down" dataAosDelay={500 + index * 200} icon={block.icon} title={block.title} text={<span><b>{block.num}</b> {block.text}</span>}/>)
                        }
                        </div>
                        <p data-aos="fade-up" data-aos-delay="1100" data-aos-offset="130" className='text-gray-800 dark:text-gray-300 p-2 mb-12' style={{whiteSpace: 'break-spaces'}}>{texts.about_me.text.join('\n')}</p>
                        <Link dataAos="fade-up" dataAosDelay="1300" dataAosOffset='120' outline link="#projects" className='m-2'>{ texts.links['#projects'] }</Link>
                        <Link dataAos="fade-up" dataAosDelay="1500" dataAosOffset='120' outline link="#tech" className='m-2'>{ texts.links['#tech'] }</Link>
                        <Link dataAos="fade-up" dataAosDelay="1700" dataAosOffset='120' outline link="#contact" className='m-2'>{ texts.links['#letstalk'] }</Link>
                    </div>
                </div>
            </Block>

            <Block id="projects">
                <div className='p-6 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
                    {
                        projects.map((p, index) => <Project dataAos="fade-up" dataAosDelay={index*350} key={p.title} title={p.title} description={p.description[lang]} image={p.image} techs={p.techs} links={p.links} />)
                    }
                </div>
            </Block>

            <Block id="tech">
                <div dir='ltr' className='p-6 flex flex-col md:flex-row'>
                    {
                        techs.map((tech, index) => {
                            return (
                                <PanelBox dataAos="fade-up" dataAosDelay={index * 200} key={tech.title}>
                                    <h1 className='text-base text-cyan mb-6'>{tech.title}</h1>
                                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 text-left px-43'>
                                        {
                                            tech.techs.map((t, i) =>
                                                <div data-aos="fade-up" data-aos-anchor='#tech' data-aos-offset='800' data-aos-delay={(index * 1500) + 300 + i * 150} key={t.name} className='w-fit my-2'>
                                                    <FontAwesomeIcon className='text-cyan mx-2' icon={t.icon} />
                                                    <span className='text-gray-800 dark:text-white text-sm'>{t.name}, <span className='text-gray-500 dark:text-gray-300 text-xs'>{t.exp}</span></span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </PanelBox>
                            )
                        })
                    }
                    
                </div>
            </Block>

            <Block id="contact">
                <div className='p-6 flex flex-col md:flex-row'>

                    <div className='h-auto md:w-1/2 px-8 '>
                        <div style={{justifyItems: 'right'}} className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                            {
                                contacts.map((c, i) => <Contact dataAos="fade-up" dataAosDelay={i * 150} key={c.id} icon={c.icon} title={texts.contact[c.id]} text={<span>{c.text}</span>} link={c.link} />)
                            }
                        </div>
                    </div>

                    <ContactForm/>

                </div>

            </Block>
        </>
    )
}

export default Index