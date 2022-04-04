/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Panel from '../Components/UI/Panel'
import useAxios from '../libs/useAxios'
import Card from '../Components/Card'

const Index = () => {
    const [show, setShow] = useState(false)
    const [cast, setCast] = useState(false)

    let { id } = useParams()

    const FetchData = async () => {
        const { data:shows } = await useAxios(`shows/${id}`)
        setShow(shows)

        const { data:cast } = await useAxios(`shows/${id}/cast`)
        setCast(cast)
    }

    useEffect(() => {
        FetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        show && cast && <>
            <div className='mt-16'>
                <div className='flex justify-center items-center'>
                    <div className='h-[43rem] bg-gradient-to-r overflow-auto from-indigo-500 to-indigo-800 -mt-12 w-full absolute top-0 skew-y-3 shadow-lg'>
                        <div style={{backgroundImage: `url(${show?.image?.original})`}} className='h-[43rem] w-full flex justify-center items-center absolute opacity-25 blur-sm bg-cover bg-center'></div>
                    </div>

                    <div className='z-10 flex flex-col lg:flex-row lg:container pt-12 lg:mx-32'>

                        <div data-aos="fade-up" className='p-10 self-center'>
                            <img alt="" src={show?.image?.original} className="rounded-xl shadow-xl h-[35rem]"/>
                        </div>

                        <div data-aos="fade-up" className='p-10 lg:w-2/3'>
                            <Card className='px-8 py-2 shadow-md rounded-md relative text-black lg:text-white text-left lg:min-h-[20rem] bg-slate-100 lg:bg-gray-200/10 dark:bg-gray-200/10 dark:text-white mb-0'>
                                <div className='my-4'>
                                    {
                                        show.rating.average ? (
                                            [...Array(5)].map((x, i) => <FontAwesomeIcon key={i} className={(show.rating.average/2).toFixed(0) >= i+1 ? 'text-gray-700 dark:text-gray-300 lg:text-gray-300 text-md' : 'text-gray-300 dark:text-gray-700 lg:text-gray-700 text-md'} icon={faStar} /> )
                                        )
                                        :
                                        ([...Array(5)].map((x, i) => <FontAwesomeIcon key={i} className='text-gray-400 text-xs' icon={faStar} /> ))
                                    }
                                    <span className='text-sm mx-2'>({(show.rating.average/2).toFixed(1)})</span>
                                </div>
                                <h1 className='text-3xl font-medium	amy-4'>
                                    {show?.name}
                                </h1>
                                <p className='text-md font-base my-4 mb-16'>
                                    {show?.summary.replace(/<[^>]*>?/gm, '')}
                                </p>
                                <div className='absolute bottom-5'>
                                    {
                                        show.genres.length >= 1 &&
                                            show.genres.map(g => <span key={g} className="px-2 py-1 mx-0.5 text-xs rounded-full bg-indigo-800 text-white">{g}</span>)
                                    }
                                </div>
                            </Card>
                        </div>

                    </div>
                </div>
            
            <div className='pb-12 p-6 flex flex-col lg:flex-row lg:container m-auto dark:text-white'>
                <Panel className='lg:w-1/2 mx-4'>
                    <h1 className='font-medium text-xl mb-8'>Show Info</h1>
                    <InfoBlock>
                        <InfoRow title='Streamed on' text={show.network.name} />
                        <InfoRow title='Schedule' text={show.schedule.days.join(', ')} />
                        <InfoRow title='Status' text={show.status} />
                        { show.genres.length > 0 && <InfoRow title='Genres' text={show.genres.join(', ')} /> }
                        <InfoRow title='Language' text={show.language} />
                    </InfoBlock>
                </Panel>
                <Panel className='lg:w-1/2 mx-4'>
                    <h1 className='font-medium text-xl mb-8'>Starring</h1>
                    <InfoBlock>
                        { cast.map((c, i) => <Star key={i} person={c.person} character={c.character} />) }
                    </InfoBlock>
                </Panel>
            </div>
            </div>
        </>
    )
}

const Star = ({ person, character }) => {
    return (
        <tr className="border-b border-gray-800 dark:border-slate-200 w-full">
            <td className="px-2 py-4 w-12">
            {
                person.image && <img
                    src={person.image.medium}
                    className="rounded-full w-10 h-10 bg-contain bg-top"
                    alt="Avatar"
                />
            }
            </td>
            <td className="px-6 py-4 font-semibold">
                { person.name }<br/>
                <span className='lg:hidden dark:text-slate-300 font-normal'>{ character.name }</span>
            </td>
            <td className="hidden lg:table-cell px-6 dark:text-slate-300">
                { character.name }
            </td>
        </tr>
    )
}

const InfoRow = ({ title, text }) => {
    return (
        <tr className="border-b border-gray-800 dark:border-slate-200 w-full">
            <td className="w-1/3 px-6 py-8 font-semibold">
                { title }
            </td>
            <td className="px-6 dark:text-slate-300">
                { text }
            </td>
        </tr>
    )
}

const InfoBlock = ({ children }) => {
    return (
        <table className='w-full'>
            <tbody className='text-left'>
                { children }
            </tbody>
        </table>
    )
}

export default Index