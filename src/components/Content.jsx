import React, { useEffect, useState } from 'react';
import ContentBox from './Contents/ContentBox';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const query = await getDocs(collection(db, 'products'));
      const items = query.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    getData();
  }, []); 

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
  } 

  return (
    <div className="relative">
      <div className="px-44">
        <h1 className="text-2xl font-medium my-4">Fresh recommendations</h1>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <ContentBox key={product.id} data={product}
            onClick={() => handleProductClick(product.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
