import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css'; // Pastikan CSS Anda diterapkan
import { CartProvider } from './context/CartContext'; // Pastikan pathnya benar

const root = ReactDOM.createRoot(document.getElementById('root')); // Sesuaikan ID jika diperlukan
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
