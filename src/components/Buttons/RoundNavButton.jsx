import React from 'react'

const RoundNavButton = ({ icon: Icon }) => {
  return (
    <>
     <button className='rounded-full hover:bg-blue-400/30 p-2'><Icon  className="text-black text-xl" /></button>
    </>
  )
}

export default RoundNavButton