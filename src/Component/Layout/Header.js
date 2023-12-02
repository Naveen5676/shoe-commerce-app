import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import Cartcontext from "../../Store/Cartcontext";

const Header = (props) => {
  const cartctx = useContext(Cartcontext);

  let totalqty = 0;
  cartctx.cart.map(
    (item) => (totalqty = totalqty + item.largeqty + item.medqty + item.smqty)
  );
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={classes.cartContainer}>
        <button className={classes.cartButton} onClick={props.OnOpen}>
          <p>{totalqty}</p>
          Cart
        </button>
      </div>
    </Fragment>
  );
};
export default Header;
