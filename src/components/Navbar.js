import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='md:mt-10 px-5 xl:px-44 navbar  my-5'>
      <h1 className='font-bold lg:text-xl '>Create Flashcard</h1>
      <div className='my-5 md:text-base text-sm md:font-medium font-bold text-slate-500'>
        <NavLink to="/" className=" mr-4 relative">Create New  </NavLink>
        <NavLink to="/card" className=" relative" >My Flash Card</NavLink>
        <hr className='border-slate-400' />
      </div>
    </div>
  )
}

export default Navbar