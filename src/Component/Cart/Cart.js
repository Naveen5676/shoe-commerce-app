import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import Cartcontext from "../../Store/Cartcontext";

const Cart = (props) => {
  const cartctx = useContext(Cartcontext);

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartctx.cart.map((item) => (
        <li className={classes.cart}>
          <div>
            <h3>{item.showname}</h3>
            <div className={classes.quantity}>
              Description:{item.description}
            </div>
            <div className={classes.price}>{item.price}</div>
            <p>Large:{item.largeqty}</p>
            <p>Medium:{item.medqty}</p>
            <p>Small:{item.smqty}</p>
          </div>
        </li>
        // <li>Name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
      ))}
    </ul>
  );

  const resetHandler = () => {
    cartctx.setcartnull();
  };

  return (
    <Modal onClose={props.OnClose}>
      {cartitems}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.OnClose}>
          Close
        </button>
        <button className={classes.button} onClick={resetHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
