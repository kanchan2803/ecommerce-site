import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">E-Commerce Site</h1>
        <button className="cart-button" onClick={toggleCart}>
          🛒 Cart ({cartItems.length})
        </button>
      </header>
      <ProductList addToCart={addToCart} />
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={toggleCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
