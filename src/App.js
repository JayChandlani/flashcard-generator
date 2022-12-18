import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Main from './Routes/Main'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <ToastContainer />
        </div>
    )
}

export default App