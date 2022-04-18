import { useContext } from "react"
import { Context } from "../../Context"
import Lang from "../../Lang"
import FloatingBar from "../FloatingBar"
import Footer from "./Footer"
import NavBar from "./Navbar"
import { useEffect } from 'react'
import AOS from 'aos'

const PageUI = ({ children }) => {
    const { lang } = useContext(Context)

    useEffect(() => {
        window.scrollTo({ top: 0 })
        AOS.init({
          offset: 400,
          duration: 700
        })
        AOS.refresh()
    }, [])

    return (
        <div dir={Lang.filter(l => l.identifier === lang)[0].dir || 'ltr'}>
            <NavBar />
                <div className='mt-14'>
                    { children }
                </div>
            <FloatingBar />
            <Footer />
        </div>
    )
}

export default PageUI