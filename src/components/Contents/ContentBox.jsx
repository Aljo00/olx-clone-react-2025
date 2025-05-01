import React from "react";
import RoundNavButton from "../Buttons/RoundNavButton";
import { FaRegHeart } from "react-icons/fa";

const ContentBox = ({ data, onClick }) => {
  const { imageUrls, price, productName, location, userName, createdAt } = data;
  const formattedDate = createdAt?.toDate?.().toDateString() || "Just Now";
  const randomYear = Math.floor(Math.random() * (2024 - 2015 + 1)) + 2015;
  const randomKm = (Math.floor(Math.random() * 70) + 10) * 1000;
  return (
    <div onClick={onClick} className="w-[280px] flex flex-col justify-center items-start relative border bg-white border-gray-400 p-2 rounded-md cursor-pointer   ">
      <img
        src={imageUrls?.[0]}
        className="w-[280px] h-44 object-cover"
        alt=""
      />
      <p className="font-bold text-xl pt-2">₹ {price}</p>
      <p>{randomYear} - {randomKm.toLocaleString()} km</p>
      <p className="text-gray-500 font-medium w-60 truncate overflow-hidden">
        {productName}
      </p>
      <div className="flex w-full justify-between text-xs text-gray-500">
        <div className="w-40 flex gap-2 truncate overflow-hidden">
         <p>{userName}</p>
          <p>{location}</p>
        </div>
        <p className="text-end">{formattedDate}</p>
      </div>

      <div className="absolute top-4 right-4 bg-white rounded-full">
        {" "}
        <RoundNavButton icon={FaRegHeart} />{" "}
      </div>
    </div>
  );
};

export default ContentBox;
