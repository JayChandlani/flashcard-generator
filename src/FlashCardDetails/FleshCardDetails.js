import React, { useEffect } from 'react'
import { NavLink, Link, useParams, Outlet, useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { addGroupId } from '../redux/actions'
import Button from '../components/Button';
const FlashCardDetail = () => {

    const navigation = useNavigate()
    const dispatch = useDispatch()
    const cardData = useSelector(state => state.card) //getting card data from redux state
    const { groupId, cardId } = useSelector(state => state.id) // getting link id from redux state

    let index = useParams().id
    useEffect(() => {
        dispatch(addGroupId(parseInt(index))) // dispatching card link id 
        // eslint-disable-next-line
    }, [index])

    //function for navigating to next card
    const handleCorousel = (val) => {
        if (val === 'inc' && cardId < cardData[groupId].card.length - 1) {
            navigation(`/card/${groupId}/${cardId + 1}`)
        }

        else if (cardId > 0 && val === 'dec') {
            navigation(`/card/${groupId}/${cardId - 1}`)
        }
    }
    return (
        <>
            {cardData.length ?
                <div className='md:mt-10  px-5  xl:px-44  my-5'>
                    <div className='flex space-x-5'>
                        <div>
                            <Link to={'/card'}><FaLongArrowAltLeft className='text-slate-700 inline-block  ' size={'2rem'} /></Link>
                        </div>
                        <div className='space-y-5 pb-5 overflow-hidden'>

                            <h1 className='font-bold text-lg'>{cardData[groupId].group}</h1>

                            <span className=' text-center'>{cardData[groupId].description}</span>
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 space-x-3'>
                        {/* side bar for navigation */}
                        <div className=' bg-white min-w-[150px]  max-w-[250px] shadow-md p-4 rounded-md md:order-none order-1 '>
                            <h5 className='text-slate-500'>Flashcards</h5>
                            <hr className=' border-slate-400' />
                            <div className=' p-2 space-y-3 overflow-hidden cardlink'>

                                {/* maping through different card list */}

                                {cardData[groupId].card.map((obj, index) => {
                                    return (
                                        <NavLink to={`/card/${groupId}/${index}`}
                                            key={index}
                                            className=' font-semibold block'>
                                            {obj.term}
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='  col-span-3 grid justify-center '>

                            {/* defined outlet component for using corousel component  */}
                            <Outlet />
                            <p className='mx-auto border h-3 w-60 bg-black opacity-5 mt-3 rounded-[100%] shadow-xl'></p>
                            <div className='flex text-slate-700 cursor-pointer justify-center my-5 space-x-5'>

                                {/* onClick function for navigating cards */}
                                <FaChevronLeft size={'1.5rem'} onClick={() => handleCorousel('dec')} />
                                <span>{cardId + 1}/{cardData[groupId].card.length}</span>
                                <FaChevronRight size={'1.5rem'} onClick={() => handleCorousel('inc')} />
                            </div>
                        </div>
                        <Button groupId={groupId} cardData={cardData} cardId={cardId} />
                    </div>
                </div> : ""}
        </>

    )
}

export default FlashCardDetail