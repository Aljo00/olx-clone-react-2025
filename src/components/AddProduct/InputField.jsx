import React from 'react'

const InputField = ({ label, type = "text", placeholder = "" }) => {
    const inputStyle = "border border-gray-500 rounded-md p-2 py-[12px] text-black w-full focus:border-black focus:outline-none";

  
    return (
      <div className="flex flex-col gap-1">
        <label className="text-black font-medium">{label}</label>
        <input className={inputStyle} type={type} placeholder={placeholder} />
      </div>
    );
  };

export default InputField