import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='w-full max-w-[300px] flex flex-col border-solid border-black border-2'>
        <h1 className='text-[20px] font-bold'>title</h1>
        <span className='flex items-center justify-around'>
            <p>Region Food</p>
            <p>region</p>
        </span>
        <span className='flex items-center justify-around'>
            <p>Cooking time:</p>
            <p>Time</p>
        </span>
        <p className='text-start my-4 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ....</p>
        <Link className='mx-auto rounded-[5px] w-full max-w-[100px] mb-3 border-solid border-2 border-black'>Read More</Link>
    </div>
  )
}

export default Card