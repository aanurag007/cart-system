import React from 'react';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 'P001', name: 'Laptop', price: 1000, category: 'Electronics' },
    { id: 'P002', name: 'Phone', price: 500, category: 'Electronics' },
    { id: 'P003', name: 'T-Shirt', price: 20, category: 'Fashion' },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
