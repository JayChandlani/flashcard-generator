import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <>
      <div className='bg-white w-full px-10 py-4 shadow-md'>
        <h1 className='font-bold md:text-2xl text-lg'>Flash Card Generator</h1>
      </div>
      <div className='md:mt-10 px-5 2xl:px-44 xl:px-20 my-5 navbar'>
        <h1 className='font-bold lg:text-xl '>Create Flashcard</h1>
        <div className='my-5 md:text-base text-sm md:font-medium font-bold text-slate-500'>
          <NavLink to="/" className="nav mr-4 relative">Create New  </NavLink>
          <NavLink to="/card" className=" nav relative" >My Flash Card</NavLink>
          <hr className='border-slate-400' />
        </div>
      </div>
    </>
  )
}

export default Navbar