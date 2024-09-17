import React from 'react';

const Cart = ({ cartItems, removeFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product.id} className="cart-item">
              <h3>{item.product.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.product)}>
                Remove from Cart
              </button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
