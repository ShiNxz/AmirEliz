import { useContext } from "react"
import { Context } from "../../Context"

const BlockTitle = ({ title }) => <h1 data-aos="fade-up" className='text-lg font-semibold text-cyan'>{ title }</h1>

const Block = ({ children, id }) => {
    const { texts } = useContext(Context)
    return (
        <div className='py-4 pt-16 mb-24 lg:container m-auto' id={id}>
            <BlockTitle title={ texts.links[`#${id}`] }/>
            { children }
        </div>
    )
}

export default Block