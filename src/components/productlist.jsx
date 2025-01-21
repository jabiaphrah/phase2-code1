import React from 'react';
import Product from "./product.jsx";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div style={styles.container}>
      <h2>Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    padding: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '15px',
  },
};

export default ProductList;
