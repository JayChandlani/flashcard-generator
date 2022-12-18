import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { localCard } from '../redux/actions/setCard'
import FlashCardCorousel from '../components/FlashCardCorousel'
import CreateFlashCard from '../CreateFlashCard/CreateFlashCard'
import MyFlashCard from '../MyFlashCard/MyFlashCard'
import FlashCardDetail from '../FlashCardDetails/FleshCardDetails'


const Main = () => {
    const dispatch = useDispatch();

    // getting data from local storage on load
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('card'))
        if (localData)
            dispatch(localCard(localData))
        // eslint-disable-next-line
    }, [])

    return (
        <Routes>
            <Route path={'/'} element={< CreateFlashCard/>} />
            <Route path={'/card'} element={<MyFlashCard />} />
            <Route path='/card/:id' element={<FlashCardDetail />}>
                <Route path={':index'} element={<FlashCardCorousel />}></Route>
            </Route>
        </Routes>
    )
}

export default Main