import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Discounts from './components/Discounts';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product, quantity = 1) => {
    const exists = cartItems.find((item) => item.product.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
    updateTotal();
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.product.id !== product.id));
    updateTotal();
  };

  const updateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  return (
    <div className="app">
      <h1>Mini E-commerce Cart System</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} total={total} />
      <Discounts />
      <Checkout cartItems={cartItems} total={total} />
    </div>
  );
};

export default App;
