import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onClose, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <p>Total Items: {cartItems.length}</p>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>
      <p>Total Cost: ${calculateTotal()}</p>
      <button className="place-order-button">
        Place Order
      </button>
    </div>
  );
};

export default Cart;
