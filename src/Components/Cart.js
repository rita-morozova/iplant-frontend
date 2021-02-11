import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartTotal from "./CartTotal";
import { Icon, Button } from "semantic-ui-react";
import PayPal from "./PayPal";

const Cart = ({ cart, clearCart, removeFromCart }) => {
  

    return (
      <div>
        <br />
        <Button
          className="mx-auto"
          floated="right"
          secondary
          onClick={clearCart}
          style={{ margin: "1.5rem" }}
        >
          Clear Cart
        </Button>
        <br />
        <h2> Your Cart</h2>
        <div>
          {cart.map((plant) => (
            <li className="cart-item" key={plant.id}>
              <img
                className="cart-item-image"
                src={plant.plant.image}
                alt="plant"
              />
              <div className="cart-item-info">
                <h1 className="cart-item-name">{plant.plant.name}</h1>
                <div className="cart-item-value">
                  <span className="cart-item-price">
                    ${plant.plant.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <span
                className="cart-item-delete"
                onClick={() => {
                  removeFromCart(plant.plant);
                }}
              >
                <Icon name="trash alternate outline" size="small" />
              </span>
            </li>
          ))}
        </div>

        <CartTotal cart={cart} />

        <Link to={"/checkout"} total={<CartTotal />}>
          <Button
            color="olive"
            type="button"
            className="cart-checkout-button mx-auto"
            style={{ margin: "1.5rem", width: "250px" }}
          >
            Checkout
          </Button>
        </Link>

        <PayPal />
      </div>
    );
}

export default Cart;
