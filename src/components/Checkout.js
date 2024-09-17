import React from 'react';

const Checkout = ({ cartItems, total }) => {
  const applyDiscounts = () => {
    let discount = 0;

    cartItems.forEach((item) => {
      // Buy 1 Get 1 Free on Fashion
      if (item.product.category === 'Fashion') {
        discount += Math.floor(item.quantity / 2) * item.product.price;
      }
      // 10% Off on Electronics
      if (item.product.category === 'Electronics') {
        discount += 0.1 * item.quantity * item.product.price;
      }
    });

    return discount;
  };

  const handleCheckout = () => {
    const discount = applyDiscounts();
    const finalTotal = total - discount;
    alert(`Final Total after discount: $${finalTotal.toFixed(2)}`);
  };

  return (
    <div className="checkout">
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
