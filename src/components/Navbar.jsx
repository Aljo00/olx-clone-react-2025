import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import olxLogo from "../assets/olx_logo.svg";
import { SellButton } from "./Buttons/SellButton";
import RoundNavButton from "./Buttons/RoundNavButton";
import { FaRegHeart } from "react-icons/fa";
import UserInfoNav from "./Nav/UserInfoNav";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user } = useUser()

  const navigate = useNavigate()
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleAddProduct = () => {
    user ? navigate("/sell") : setIsLoginOpen(true);
  }
  
  return (
    <div className="shadow pb-1 sticky top-0 bg-white z-20">
      <div
        className="px-4 flex gap-4 py-[10px]"
        style={{ backgroundColor: "#eff1f3" }}
      >
        <div>
          <img src={olxLogo} className="w-16" alt="logo" />
        </div>
        <div className="flex w-full gap-4">
          <div className="flex gap-2 justify-between items-center p-2 rounded-sm bg-white border-2 border-black/90">
            <IoSearch className="text-xl" />
            <p className="w-48 font-normal truncate overflow-hidden whitespace-nowrap">
              Andaman & Nicobar Islands
            </p>
            <IoIosArrowDown className="text-2xl" />
          </div>

          <div className="flex flex-1">
            <input
              className="flex-1 px-2 rounded-l-sm border-2 border-black/90 focus:border-blue-900/50 focus:outline-none"
              type="text"
              placeholder=" Search"
            />
            <button className="bg-black flex justify-center items-center px-2 rounded-r-md">
              <HiOutlineSearch className="text-white text-2xl m-1" />
            </button>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <button className="flex gap-2 text-md font-semibold">ENGLISH <IoIosArrowDown className="text-2xl" /></button> 

          <RoundNavButton icon={FaRegHeart} />


          <UserInfoNav setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />

          <SellButton onClick={handleAddProduct} />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
