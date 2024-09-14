import React, { createContext, useState, useContext } from 'react';

// Membuat konteks untuk keranjang belanja
const CartContext = createContext();

// Membuat provider untuk keranjang belanja
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Menambahkan item ke keranjang
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Menghapus item dari keranjang
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook kustom untuk mengakses konteks
export const useCart = () => useContext(CartContext);
