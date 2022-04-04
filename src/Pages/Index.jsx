/* eslint-disable jsx-a11y/anchor-is-valid */
import Show from '../Components/ShowCard'
import Card from '../Components/Card'
import axios from 'axios'
import config from '../config'
import { useEffect, useState } from 'react'

const Index = ({ search }) => {
    const [allShows, setAllShows] = useState(false)
    const [shows, setShows] = useState(false)
    const [page, setPage] = useState(3)
    const [itemsEveryPage, setItemsEveryPage] = useState(20)

    const FetchData = async () => {
        await axios({
            method: 'GET',
            url: search.query ? `${config.axios.baseURI}/search/shows?q=${search.query}` : `${config.axios.baseURI}/schedule`,
            headers: config.axios.headers
        })
        .then(data => {
            setAllShows(data.data)
            setPage(0)
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        FetchData()
        setPage(0)
    }, [search])

    useEffect(() => {
        FetchData()
    }, [])

    useEffect(() => {
        allShows && setShows(allShows.slice(page * itemsEveryPage, page * itemsEveryPage + itemsEveryPage))
        window.scrollTo(0, 0)
    }, [page, allShows] )

    return (
        <>
            <div className='mt-16'>
                <div className='h-[40rem] flex justify-center items-center'>
                    <div className='bg-gradient-to-r overflow-auto from-indigo-500 to-indigo-800 h-[43rem] -mt-12 w-full absolute top-0 skew-y-3'>
                        <div className='bg-header h-[43rem] w-full flex justify-center items-center absolute opacity-25 blur-sm bg-cover bg-center'></div>
                    </div>
                    <Card className='w-4/6 xl:w-2/6 h-2/5 flex justify-center text-center items-center flex-col p-4 lg:p-10'>
                        <span className='text-white font-bold text-base xl:text-3xl'>TV Show and web series database.</span>
                        <span className='text-slate-200 font-semibold text-sm xl:text-md'>Create personalised schedules. Episode guide, case, crew and character information.</span>
                    </Card>
                </div>
                <div className="p-4 lg:px-24" id="shows">
                    {
                    shows ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-9 lg:gap-8 1xl:gap-12 -mt-48">
                        {
                          shows.length > 0 ? shows.map(show => <Show key={show.id} show={show}/>) : `Couldn't find any...`
                        }
                        </div>
                    )
                    :
                    <div className='h-56 text-center text-4xl dark:text-slate-200'> Loading... </div>
                    }
                </div>
            </div>

            <div className="flex justify-center py-12">
                <ul className="flex list-style-none">
                {
                    allShows && [...Array(Math.ceil(allShows.length/itemsEveryPage))].map((e, i) => <li key={i}><a onClick={() => setPage(i)} className={`relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 ${page === i ? 'hover:bg-blue-600 bg-blue-600 text-white hover:text-white' : ''} dark:text-white hover:text-white  hover:bg-blue-500`}>{i+1}</a></li>)
                }
                </ul>
            </div>
        </>
    )
}

export default Index