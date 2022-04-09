import { createContext, useEffect, useState } from 'react'
import Lang from "./Lang"
import useAxios from './libs/useAxios';

export const Context = createContext()

const ContextProvider = ({ children }) => {

	const FetchData = async () => {
		const { data } = await useAxios('https://ipapi.co/json/')
		if(localStorage.getItem("lang")) return;
		setLang(data.country_code === 'IL' ? 'he' : 'en')
	}

	useEffect(() => FetchData(), [])
	
	
	const [lang, setLang] = useState(localStorage.getItem("lang") || Lang[0].identifier)
	const texts = Lang.filter(l => l.identifier === lang)[0].texts

	document.title = texts.title

  	return (
		<Context.Provider
  			value={{
				lang, texts, setLang
  			}}
		>
  			{children}
  		</Context.Provider>
  	)
}

export default ContextProvider