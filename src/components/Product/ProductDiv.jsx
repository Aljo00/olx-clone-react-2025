import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDoc, doc } from "firebase/firestore";

const ProductDiv = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data()
        setProduct(data);
        if(data.imageUrls && data.imageUrls.length > 0) {
          setSelectedImage(data.imageUrls[0])
        }
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [id]);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-1">
      <div className="px-36 py-2 text-xl text-gray-600">
        <nav className="flex items-center space-x-2">
          <span onClick={() => navigate('/')} className="hover:underline cursor-pointer text-blue-600">
            Home
          </span>
          <span>/</span>
          <span className="hover:underline cursor-pointer text-blue-600">
            Category
          </span>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{product.productName}</span>
        </nav>
      </div>
      <div className="px-32">
        <div className="p-4">
          <div className="flex">
            <div className="w-[600px]">
              <div className="w-[600px] bg-black">
              <img
                src={selectedImage}
                alt={product.productName}
                className="w-[600px] h-96 object-contain rounded-lg"
              />
              </div>
              <div className="flex gap-2 mt-4">
                {product.imageUrls?.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Preview ${i + 1}`}
                    onClick={() => setSelectedImage(url)}
                    className="w-24 h-24 object-contain rounded cursor-pointer bg-black"
                  />
                ))}
              </div>
            </div>
            <div className="ml-8">
              <h1 className="text-3xl font-bold">{product.productName}</h1>
              <p className="text-lg text-gray-500">
                Location: {product.location}
              </p>
              <p className="text-xl text-gray-700 mt-1 font-semibold">₹{product.price}</p>
              <p className="text-md text-gray-600">user: {product.userName}</p>
              <p className="text-md text-gray-600">Phone: {product.phone}</p>
              <p className="mt-4 text-xl w-[600px]">{product.description}</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDiv;
