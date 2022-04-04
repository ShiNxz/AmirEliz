import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = ({ search }) => {
    const [minimize, setMinimize] = useState(true)
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || 'false')

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    if(darkMode === 'true')
        document.body.classList.add("dark")
    else
        document.body.classList.remove("dark")

    return (
        <nav className="bg-indigo-900/95 backdrop-blur-lg shadow-lg z-40 fixed w-full h-16 top-0">
            <div className="max-w-7xl mx-auto px-8 h-full">
                <div className="flex items-center justify-between py-2 content-center h-full">
                    <div className="flex items-center">
                        <div className="hidden md:block ml-10 flex items-baseline space-x-4">
                            <Link className="text-gray-300 duration-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">
                                <FontAwesomeIcon className="mr-2" icon={ faHouse } />
                                Home Page
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">

                            <div className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className="relative">
                                    <input type="text" onChange={(s) => search.setQuery(s.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-800 w-full py-2 px-4 dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-xs focus:outline-none duration-300" placeholder="Search..."/>
                                </div>
                            </div>

                            <div className='mx-4'>
                                <FontAwesomeIcon className="text-white hover:text-slate-200 duration-200 cursor-pointer" onClick={() => setDarkMode(last => last === 'true' ? 'false' : 'true')} icon={darkMode === 'true' ? faCloud : faSun } />
                            </div>

                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <div className='inline-flex items-center justify-center'>
                            <button onClick={() => setMinimize(!minimize)} className="text-white hover:text-gray-300 p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                </svg>
                            </button>
                            <FontAwesomeIcon className="text-white hover:text-slate-200 duration-200 cursor-pointer h-8 w-8" onClick={() => setDarkMode(last => last === 'true' ? 'false' : 'true')} icon={darkMode === 'true' ? faCloud : faSun } />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`md:hidden duration-300 px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-hidden bg-indigo-900/95 ${minimize ? '!h-0 !py-0' : 'h-32'}`}>
                <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/">
                    <FontAwesomeIcon className="mr-2" icon={ faHouse } />
                    Home Page
                </Link>
            </div>
        </nav>
    )
}

export default NavBar