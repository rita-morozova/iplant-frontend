import React from "react";

const CartTotal = ({ cart }) => {
  return (
    <div className="cart-total">
      <span className="cart-total-label">Total:</span>
      <span className="cart-total-value">
        ${" "}
        {cart
          .map((plant) => plant.plant.price)
          .reduce((acc, price) => acc + price, 0)
          .toFixed(2)}
      </span>
    </div>
  );
};

export default CartTotal;
