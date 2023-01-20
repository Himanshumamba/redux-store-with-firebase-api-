import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../store/cart-slice';
import './Cart.css';
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    console.log(cartAction.setShowCart());
    dispatch(cartAction.setShowCart());
  };

  return (
    <div className="cartIcon">
      <button onClick={showCart}>Cart: {quantity} Items</button>
    </div>
  );
};

export default Cart;
