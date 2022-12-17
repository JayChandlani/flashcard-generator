import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeCard } from '../redux/actions';

const FlashCard = ({ items, index }) => {
    const dispatch = useDispatch()

    // function to remove card from state
    const handleDelete = (items) => {
        dispatch(removeCard(items))
    }

    return (
        <div className="mx-auto w-full mt-10 max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300 hover:-translate-y-1">

            <div className="flex flex-col items-center relative pb-10">

                {items.groupicon
                    ? <img src={items.groupicon} alt='groupicon' className={'object-cover transition-all ease-in-out duration-500 hover:-translate-y-1 hover:rounded-md w-24 h-24 mb-3 rounded-full shadow-lg absolute -top-10'} />
                    : <img className="transition-all ease-in-out duration-500 hover:-translate-y-1 hover:rounded-md w-24 h-24 mb-3 rounded-full shadow-lg absolute bg-blue-300 -top-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEF8D8hKPhnYX3AIERI4ViHk5k7WNtyDwJw&usqp=CAU" alt="Bonnie" />}

                <FaTimes className='absolute right-2 top-2 text-slate-300 text-lg hover:text-red-400'

                    // {/* onClick function for deleting the selected card */}

                    onClick={() => handleDelete(items)} />

                <h5 className="mb-1 mt-16 text-xl font-medium text-gray-900"> {items.group}</h5>
                <h5 className='text-center  truncate w-full p-2'>{items.description} </h5>
                <span className="text-sm text-gray-500">No of Cards:{items.card ? items.card.length : ""} </span>
                <div className="flex mt-4 space-x-3 md:mt-6">

                    {/* link for the card detailes */}

                    <Link to={`/card/${index}/${0}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 bg-white rounded-lg hover:bg-red-500 hover:text-white border-red-500 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 hover:-translate-y-1 shadow-md transition-all ease-in-out duration-500">
                        View Cards
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default FlashCard