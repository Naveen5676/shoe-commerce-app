// InputDisplay.js

import React, { useContext, Fragment } from "react";
import Cartcontext from "../../Store/Cartcontext";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const InputDisplay = () => {
  const cartctx = useContext(Cartcontext);

  const addlargetocartHandler=(item)=>{
    cartctx.addlargetoCart(item)
  }

  const addmediumtocartHandler=(item)=>{
    cartctx.addmediumtoCart(item);
  }

  const  addsmalltocartHandler =(item)=>{
    cartctx.addsmalltoCart(item);
  }

  const display = cartctx.displayitem.map((item) => (
    <div key={item.id} className=" flex-column mr-3">
      <p>Name:{item.showname}</p>
      <p>Desc:{item.description}</p>
      <p>Price:{item.price}</p>
      <button onClick={() => addlargetocartHandler(item)}> (Large: {item.largeqty})</button>
      <button onClick={() => addmediumtocartHandler(item)}> (Medium: {item.medqty})</button>
      <button onClick={() => addsmalltocartHandler(item)}>(Small: {item.smqty})</button>
    </div>
  ));

  return (
    <Fragment>
      {display}
    </Fragment>
  );
};

export default InputDisplay;
