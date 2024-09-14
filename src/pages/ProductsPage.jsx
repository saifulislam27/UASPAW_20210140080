import React from 'react';
import ProductList from '../components/ProductList'; // Update the path if needed

const ProductsPage = () => {
  const dummyProducts = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
    // Add more products if needed
  ];

  return (
    <div>
      <h1>Products Page</h1>
      <ProductList products={dummyProducts} />
    </div>
  );
};

export default ProductsPage;
