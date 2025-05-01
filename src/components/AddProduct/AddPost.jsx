import React, { useState } from "react";
import InputField from "./InputField";
import { toast } from "react-toastify";
import { uploadProduct } from "../../services/SellProductService";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const inputStyle =
    "border mt-1 border-gray-500 rounded-md p-2 py-[12px] text-black w-full focus:border-black focus:outline-none";

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    phone: "",
    location: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e, index) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];

      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file.");
        return;
      }

      const updatedImages = [...images];
      updatedImages[index] = file;
      setImages(updatedImages);
    }
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = undefined;
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { productName, price, phone, location, description } = formData;

    if (!productName.trim()) {
      toast.error("Product name is required");
      return;
    }

    if (productName.trim().length < 3) {
      toast.error("Product name must be at least 3 characters");
      return;
    }

    const pattern = /^(?=(?:.*[A-Za-z]){3,})[A-Za-z0-9 ]{3,}$/;
    if (!pattern.test(productName)) {
      toast.error("Product name must be valid");
      return;
    }

    if (!price.trim()) {
      toast.error("Price is required");
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      toast.error("Price must be a valid positive number");
      return;
    }

    if (!phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    if (!location.trim()) {
      toast.error("Location is required");
      return;
    }
    if (!pattern.test(location)) {
      toast.error("Please enter a valid location");
      return;
    }

    if (location.trim().length < 2) {
      toast.error("Location must be more specific");
      return;
    }

    if (!description.trim()) {
      toast.error("Description is required");
      return;
    }

    if (description.trim().length < 10) {
      toast.error("Description should be at least 10 characters");
      return;
    }
    const filteredImages = images.filter((img) => img !== undefined);
    if (filteredImages.length === 0) {
      toast.error("Please upload at least one image.");
      return;
    }

    const productData = {
      ...formData,
      userId: user?.uid,
      userName: user?.displayName || user?.email || "Unknown User",
      createdAt: new Date(),
    };
    const result = await uploadProduct(productData, filteredImages);
    if (result.success) {
      toast.success("Product uploaded successfully");
      navigate("/");
      setFormData({
        productName: "",
        price: "",
        phone: "",
        location: "",
        description: "",
      });
      setImages([]);
    } else {
      toast.error("Error uploading product:", result.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-medium my-4">POST YOUR AD</h1>
      <div className="flex w-full gap-8 px-20">
        <div className="shadow-xl bg-white p-5 flex flex-wrap justify-between w-3/5 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-48 h-48 border border-dashed border-gray-500 rounded-md flex justify-center items-center relative"
            >
              {!images[index] ? (
                <>
                  <span
                    role="img"
                    aria-label="camera"
                    className="absolute z-10"
                  >
                    📷
                  </span>
                  <p className="text-gray-500 text-sm absolute bottom-2 z-10">
                    Upload Image
                  </p>
                </>
              ) : (
                <div className="absolute inset-0 flex justify-center items-center">
                  <img
                    src={URL.createObjectURL(images[index])}
                    alt={`Preview ${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-0 right-0 bg-gray-800 text-white p-2 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, index)}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col p-5 rounded-md gap-4 shadow-xl bg-white w-2/5">
          <InputField
            label="Product Name"
            type="text"
            placeholder="Product name"
            value={formData.productName}
            name="productName"
            handleForm={handleForm}
          />
          <InputField
            label="Price"
            type="number"
            placeholder="₹999"
            value={formData.price}
            name="price"
            handleForm={handleForm}
          />
          <InputField
            label="Phone Number"
            type="number"
            placeholder="9876543210"
            value={formData.phone}
            name="phone"
            handleForm={handleForm}
          />
          <InputField
            label="Location"
            type="text"
            placeholder="Location"
            value={formData.location}
            name="location"
            handleForm={handleForm}
          />
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              className={inputStyle}
              id="description"
              name="description"
              placeholder="This is a description for the product."
              value={formData.description}
              onChange={handleForm}
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="p-2 bg-blue-900 py-[12px] rounded-md text-white text-xl"
          >
            Post Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
