import React, { Fragment, useContext, useRef } from "react";
import classes from "./Input.module.css";
import Cartcontext from "../../Store/Cartcontext";

const Input = () => {
  const cartctx = useContext(Cartcontext);

  let shoename = useRef();
  let desc = useRef();
  let price = useRef();
  let largequantity = useRef();
  let mediumquantity = useRef();
  let smallquantity = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random(),
      showname: shoename.current.value,
      description: desc.current.value,
      price: price.current.value,
      largeqty: largequantity.current.value,
      medqty: mediumquantity.current.value,
      smqty: smallquantity.current.value,
    };

    cartctx.addDisplayItem(data);
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler} className={classes.form}>
        <label>Shoe name</label>
        <input type="text" ref={shoename}></input>
        <label>Description</label>
        <input type="text" ref={desc}></input>
        <label>Price</label>
        <input type="number" ref={price}></input>
        <label>Quantity available</label>
        <input type="number" placeholder="Large" ref={largequantity}></input>
        <input type="number" placeholder="Medium" ref={mediumquantity}></input>
        <input type="number" placeholder="Small " ref={smallquantity}></input>
        <button type="submit">Add Product</button>
      </form>
    </Fragment>
  );
};
export default Input;
