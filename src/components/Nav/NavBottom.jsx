import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const NavBottom = () => {
    const categories = [
        "Cars",
        "Motorcycles",
        "Mobile Phones",
        "For Sale: Houses & Apartments",
        "Scooters",
        "Commercial & Other Vehicles",
        "For Rent: Houses & Apartments"
      ];
      
  return (
    <div className='shadow-md w-full flex gap-4 py-2 pl-28'>
        <div className='flex items-center gap-2 font-bold text-sm'><p>ALL CATEGORIES</p> <IoIosArrowDown className='text-2xl' /></div>
        {categories.map((item, i) => (
            <li className='list-none text-sm font-normal' key={i}>{item}</li>
        ))}
    </div>
  )
}

export default NavBottom