import React, { Fragment } from "react";
import classes from "./Header.module.css";




const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={classes.cartContainer}>
        <button className={classes.cartButton} onClick={props.OnOpen}>
          <p>0</p>
          Cart
        </button>
      </div>
    </Fragment>
  );
};
export default Header;
