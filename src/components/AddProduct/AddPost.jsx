import React from "react";
import InputField from "./InputField";

const AddPost = () => {
    const inputStyle = "border mt-1 border-gray-500 rounded-md p-2 py-[12px] text-black w-full focus:border-black focus:outline-none";

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-medium my-4">POST YOUR AD</h1>
      <div className="flex w-full gap-4 px-80">
        <div className="shadow-xl bg-white p-5 justify-between items-center flex flex-wrap w-full">
            <div className="w-48 h-48 border border-dashed border-gray-500 rounded-md flex justify-center items-center">image</div>
            <div className="w-48 h-48 border border-dashed border-gray-500 rounded-md flex justify-center items-center">image</div>
            <div className="w-48 h-48 border border-dashed border-gray-500 rounded-md flex justify-center items-center">image</div>
            <div className="w-48 h-48 border border-dashed border-gray-500 rounded-md flex justify-center items-center">image</div>
        </div>
        <div className="flex flex-col p-5 rounded-md gap-4 shadow-xl bg-white w-full">
          <InputField label="Product Name" type="text" placeholder="Product" />
          <InputField label="Price" type="number" placeholder="₹999" />
          <InputField
            label="Phone Number"
            type="text"
            placeholder="9876543210"
          />
          <InputField label="Location" type="text" placeholder="Location" />
          <div>
          <label for="description">Description</label>
          <textarea className={inputStyle}
            id="description"
            placeholder="This is a description for the product."
          ></textarea>
          </div>
          <button className="p-2 bg-blue-900 py-[12px] rounded-md text-white text-xl">Post Now</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
