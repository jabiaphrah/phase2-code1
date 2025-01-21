import React, { useState } from "react";
import Product from  './components/product.jsx';
import ProductList from './components/productlist.jsx';
import Cart from "./components/cart.jsx"; // Correct relative path
import "./App.css"; // Correct relative path for styles


// Sample product data
const sampleProducts = [
  { id: 1, name: 'T-Shirt', price: 900 },
  { id: 2, name: 'Jeans', price: 450 },
  { id: 3, name: 'Sneakers', price: 600 },
  { id: 4, name: 'Hat', price: 350 },
  { id: 5, name: 'Socks', price: 200 },
  { id: 6, name: 'boots', price:1500},
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add products to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove products from the cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  // Function to update product quantity
  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>E-Commerce Cart</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Product List */}
        <ProductList products={sampleProducts} onAddToCart={handleAddToCart} />

        {/* Cart */}
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onQuantityChange={handleQuantityChange}
        />
      </div>
    </div>
  );
}

export default App;
