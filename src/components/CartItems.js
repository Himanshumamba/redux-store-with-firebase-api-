import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import { useSelector } from 'react-redux';
const CartItems = () => {
  const carItems = useSelector((state) => state.cart.itemslist);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {carItems.map((i) => (
          <li key={i.id}>
            <CartItem
              id={i.id}
              price={i.price}
              total={i.totalPrice}
              name={i.name}
              quantity={i.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
