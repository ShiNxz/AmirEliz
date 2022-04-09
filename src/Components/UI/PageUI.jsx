import { useContext } from "react"
import { Context } from "../../Context"
import Lang from "../../Lang"
import FloatingBar from "../FloatingBar"
import Footer from "./Footer"
import NavBar from "./Navbar"

const PageUI = ({ children }) => {
    const { lang } = useContext(Context)

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