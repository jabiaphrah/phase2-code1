import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div style={styles.product}>
      <h3>{product.name}</h3>
      <p>Price: ksh{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};
const styles = {
  product: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '12px', // Reduce text size for all product content
  },
};


export default Product;
