import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full  z-30  fixed top-0 left-0 bg-green-300 '>
      <div className='container mx-auto w-full max-w-4xl'>
      <div className=' flex items-center justify-between px-5 py-3 '>
    <Link className='font-bold' to='/'>My Food</Link>
    <ul className='flex items-center gap-7 '>
      <NavLink to='/' className='py-1 px-2 '>All</NavLink>
      <NavLink to='/asia'>
        Asia
      </NavLink>
      <NavLink to='/europe'>
        Europe
      </NavLink>
      <NavLink to='desert'>
      Dessert
      </NavLink>
    </ul>
    <div className='py-1 px-2 border-2 border-current border-solid'>
      Created Food
    </div>
    </div>
      </div>
    </div>
  )
}

export default Header