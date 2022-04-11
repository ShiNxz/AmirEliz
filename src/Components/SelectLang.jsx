import { useContext, useState } from "react"
import { Context } from "../Context"
import Lang from "../Lang"

const SelectLang = () => {
    const { lang, setLang } = useContext(Context)
    const [open, setOpen] = useState(false)

    const handleChange = ( lang ) => {
        if(Lang.filter(l => l.identifier === lang).length < 1) return;
        localStorage.setItem("lang", lang)
        setLang(lang)
        setOpen(false)
    }

    return (
        <div className="w-40 mx-2">
            <div className="mt-1 relative">
                <button aria-label='language' type="button" onClick={() => setOpen(open => !open)} dir='ltr' className="relative w-full bg-white rounded-md shadow-lg pl-1 pr-5 py-2 cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <span className="flex items-center">
                        <span className="ml-3 block truncate">{ Lang.filter(l => l.identifier === lang)[0].text }</span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className={`h-5 w-5 duration-200 ${open ? 'text-gray-700' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd">
                            </path>
                        </svg>
                    </span>
                </button>
                <div dir='ltr' className={`mt-1 w-full z-10 rounded-md bg-white shadow-lg ${open ? 'absolute' : 'hidden'}`}>
                    <ul tabIndex="-1" role="listbox" className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {
                            Lang.map(l =>
                                <li key={l.identifier} onClick={() => handleChange(l.identifier)} className="flex items-center text-gray-900 duration-200 cursor-pointer hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-1 pr-9">
                                    <span className="ml-3 block font-normal truncate">
                                        { l.text }
                                    </span>
                                    {
                                        l.identifier === lang && <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                    }
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SelectLang