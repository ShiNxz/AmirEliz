import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faHouse } from '@fortawesome/free-solid-svg-icons'
import links from '../../Links'
import SelectLang from '../SelectLang'
import { Context } from '../../Context'

const NavBar = () => {
    const [minimize, setMinimize] = useState(true)
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
        'false'
    )

    const { texts } = useContext(Context)

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    if(darkMode === 'true')
        document.body.classList.add("dark")
    else
        document.body.classList.remove("dark")

    return (
        <nav className="bg-cyan2 duration-300 dark:bg-primary-dark shadow-sm z-40 fixed w-full h-14 top-0">
            <div className="max-w-7xl mx-auto px-8 h-full">
                <div className="flex items-center justify-between py-2 content-center h-full float-left rtl:float-right md:!float-none">
                    <div className="flex items-center">
                        <div className="hidden md:flex ml-10 items-baseline space-x-4">
                            <a className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href='#Main'>
                                <FontAwesomeIcon className="mr-2" icon={faHouse} />
                            </a>
                            {
                                links.map((l, i) => <a key={i}  className="text-gray-200 duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline decoration-2 decoration-gray-100/0 hover:decoration-gray-200" href={l.id}>{texts.links[l.id]}</a>)
                            }
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <SelectLang />
                            <div className='mx-2'>
                                <FontAwesomeIcon className="text-white hover:text-slate-200 duration-200 cursor-pointer" onClick={() => setDarkMode(last => last === 'true' ? 'false' : 'true')} icon={darkMode === 'true' ? faMoon : faSun } />
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <div className='inline-flex items-center justify-center'>
                            <button aria-label='darkmode' onClick={() => setMinimize(!minimize)} className="text-white hover:text-gray-300 p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                </svg>
                            </button>
                            <SelectLang />
                            <FontAwesomeIcon className="text-white hover:text-slate-200 duration-200 cursor-pointer h-8 w-8 mx-2" onClick={() => setDarkMode(last => last === 'true' ? 'false' : 'true')} icon={darkMode === 'true' ? faMoon : faSun } />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`md:hidden duration-300 px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-hidden backdrop-blur-sm bg-cyan2/80 dark:bg-indigo-900/80 ${minimize ? '!h-0 !py-0' : 'h-64'}`}>
                <a className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href='#Main'>
                    <FontAwesomeIcon className="mr-2" icon={faHouse} />
                </a>
                {
                    links.map((l, i) => <a key={i} className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href={l.id}>{texts.links[l.id]}</a>)
                }
            </div>
        </nav>
    )
}

export default NavBar