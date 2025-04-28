import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavAddProduct = () => {
  const navigate = useNavigate()
  return (
    <div className='px-10 py-5 text-2xl shadow-md' style={{ backgroundColor: "#eff1f3" }}>
       <FaArrowLeft className='cursor-pointer' onClick={() => navigate("/")} />
    </div>
  )
}

export default NavAddProduct