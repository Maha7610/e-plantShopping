import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }>
            +
          </button>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${getTotal()}</h3>
    </div>
  );
};

export default CartItem;