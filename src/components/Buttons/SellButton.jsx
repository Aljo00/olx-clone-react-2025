import React from 'react'
import { FaPlus } from "react-icons/fa6";

export const SellButton = ({ onClick }) => {
  return (
    <>
    <button onClick={onClick}  className='flex items-center gap-1 text-blue-950 bg-white border-4 border-red-600 px-4 py-1 rounded-full font-semibold'><FaPlus className='text-xl text-black' />  SELL</button>
    </>
  )
}
