import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Show = ({ show }) => {
    show = show.show

    return (
        <div data-aos="fade-up" className="overflow-hidden rounded-lg h-full w-[100%] z-20 bg-white dark:bg-gray-800 cursor-pointer m-auto duration-500 shadow-md hover:shadow-xl !hover:-translate-y-1">
            <Link to={`/show/${show.id}`} className="w-full block h-full">
                <img alt="#" src={show.image?.original} className="max-h-80 w-full object-cover"/>
                <div className="w-full p-4">
                    {
                        show?.rating?.average ? (
                            [...Array(5)].map((x, i) => <FontAwesomeIcon key={i} className={(show?.rating.average/2).toFixed(0) >= i+1 ? 'text-gray-700 dark:text-gray-300 text-xs' : 'text-gray-300 dark:text-gray-700 text-xs'} icon={faStar} /> )
                        )
                        :
                        ([...Array(5)].map((x, i) => <FontAwesomeIcon key={i} className='text-gray-900 text-xs' icon={faStar} /> ))
                    }

                    <p className="text-gray-800 dark:text-white text-md font-medium mb-2">
                        {show?.name}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-sm">
                        {show?.summary?.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                    </p>
                    <div className="flex items-center mt-4 relative bottom-0">
                        {show?.genres?.map(g => <span key={g} className="px-2 py-1 mx-0.5 text-xs rounded-full text-white  bg-indigo-500 ">{g}</span> )}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Show