import React from 'react';
import './Cart.css';
import CartSummary from './CartSummary';
import CartTotal from './CartTotal';

function Cart(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <CartSummary 
        selected={props.selected}
        currency={props.currency}
      />
      <CartTotal
        selected={props.selected}
        currency={props.currency}
      />
    </section>
  )
}

export default Cart;