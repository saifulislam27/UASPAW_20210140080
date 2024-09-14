import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  
  // Example product details, replace with real data from API or context
  const product = {
    id,
    name: 'Sample Product',
    price: 100,
    description: 'This is a sample product description.'
  };

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
