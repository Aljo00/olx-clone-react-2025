import React from "react";
import RoundNavButton from "../Buttons/RoundNavButton";
import { FaRegHeart } from "react-icons/fa";

const ContentBox = () => {
  return (
    <div className="relative border border-gray-400 p-2 rounded-md cursor-pointer   ">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        className="w-64"
        alt=""
      />
      <p className="font-bold text-xl pt-2">$392384</p>
      <p>2021 - 29,000 km</p>
      <p className="text-gray-500 font-medium w-60 truncate overflow-hidden">Ktm duke 390, Bs6</p>
      <div className="flex justify-between text-xs text-gray-500"><p className="w-44 truncate overflow-hidden">SHAHIDH, PORT BLAIR</p><p>5  DAYS</p></div>

      <div className="absolute top-4 right-4 bg-white rounded-full"> <RoundNavButton icon={FaRegHeart} /> </div>
    </div>
  );
};

export default ContentBox;
