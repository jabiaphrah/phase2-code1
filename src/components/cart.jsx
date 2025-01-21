import React from 'react';

const Cart = ({ cartItems, onRemove, onQuantityChange }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} style={styles.item}>
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ksh{item.price}</p>
                  <p>Total: ksh{item.price * item.quantity}</p>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      onQuantityChange(item.id, Number(e.target.value))
                    }
                    style={styles.input}
                  />
                  <button onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ksh{totalPrice}</h3>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '35%',
    padding: '20px',
    borderLeft: '1px solid #ccc',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  input: {
    width: '50px',
    marginRight: '10px',
  },
};

export default Cart;
