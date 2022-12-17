import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FlashCard from '../components/FlashCard'
import cards from '../images/cards.svg'

const MyFlashCard = () => {
    const data = useSelector(state => state.card)

    return (
        <div className='md:mt-10  px-5  xl:px-44  my-5'>
            <div className='grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4  grid-cols-1 '>

                {data.length ? data.map((items, index) => {

                    return (
                        <FlashCard key={Math.random()} items={items} index={index} />
                    )
                }) : ""}
            </div>
            {data.length
                ? ""
                : <div className=' relative top-24'>
                    <h1 className='text-center text-xl font-bold text-slate-600  '>No Cards To Show!!</h1>
                    <img className="mx-auto" src={cards} alt="logo" />
                    <Link to={'/'} className=' w-40  mx-auto px-4 block py-2 text-sm font-medium text-center text-red-500 bg-grey-100 rounded-lg hover:bg-red-500 hover:text-white border-red-500 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 hover:-translate-y-1 shadow-lg transition-all ease-in-out duration-150'>Creat Cards</Link>
                </div>}
        </div>
    )
}

export default MyFlashCard