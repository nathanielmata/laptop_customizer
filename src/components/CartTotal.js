import React from 'react';
import './CartTotal.css';

function CartTotal(props) {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.currency.format(
          Object.keys(props.selected).reduce(
            (acc, curr) => acc + props.selected[curr].cost,
            0
          )
        )}
      </div>
    </div>
  )
}

export default CartTotal;