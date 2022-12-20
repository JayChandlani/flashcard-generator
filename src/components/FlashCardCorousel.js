import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import defaultImage from '../images/default.jpg'

import { addCardId, addRef } from '../redux/actions'
const FlashCardCorousel = () => {

    const dispatch = useDispatch();
    let id = useParams().index
    const cardRef = useRef();
    const { groupId, cardId } = useSelector(state => state.id)    // getting the link id from the state
    const cardData = useSelector(state => state.card)  //getting card data from redux state 


    useEffect(
        () => {
            dispatch(addCardId(parseInt(id)))
            dispatch(addRef(cardRef))
        } // dispatching the current id and refrence to the redux state
        // eslint-disable-next-line
        , [id])

    return (
        <div ref={cardRef} className='rounded-md w-80 md:min-w-[500px] lg:min-w-[600px]  2xl:min-w-[700px] h-[450px] lg:space-y-0   overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-2 p-5 space-x-4 space-y-8 items-center shadow-sm'>
            <div className=' bg-gray-100 overflow-hidden'>
                <img className=' object-cover w-60 h-40 mx-auto' alt='flashcard-img'
                    src={cardData[groupId].card[cardId].image
                        ? cardData[groupId].card[cardId].image
                        : defaultImage} />
            </div>
            <h3 className='p-2 overflow-hidden'>
                {cardData[groupId].card[cardId].defination}
            </h3>
        </div>
    )
}

export default FlashCardCorousel