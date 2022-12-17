import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import defaultImage from '../images/default.jpg'

import { addCardId } from '../redux/actions'
const Corousel = () => {

    const dispatch = useDispatch();
    let id = useParams().index

    const { groupId, cardId } = useSelector(state => state.id)    // getting the link id from the state
    const cardData = useSelector(state => state.card)  //getting card data from redux state 


    useEffect(
        () => { dispatch(addCardId(parseInt(id))) } // dispatching the current id to the redux state
        // eslint-disable-next-line
        , [id])

    return (
        <div className='rounded-md w-80 md:min-w-[500px] lg:min-w-[600px]  2xl:min-w-[700px] h-96   overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-2 p-10 space-x-4 items-center'>
            <div className=' bg-gray-200  overflow-hidden'>
                <img className=' object-cover w-60 h-40 mx-auto'
                    src={cardData[groupId].card[cardId].image
                        ? cardData[groupId].card[cardId].image
                        : defaultImage} alt="" />
            </div>
            <h3 className='p-5'>
                {cardData[groupId].card[cardId].defination}
            </h3>
        </div>
    )
}

export default Corousel