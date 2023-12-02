import React, { useState } from "react";
import Cartcontext from "./Cartcontext";

const Cartprovider = (props) => {
  const [display, setDisplay] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const addDisplayItemHandler = (data) => {
    setDisplay((prevDisplay) => [...prevDisplay, data]);
  };

  const addlargetoCartHandler = (data) => {
    // Check if the item is already in the cart
    const isInCart = cartItem.some((item) => item.id === data.id);

    if (isInCart) {
      setCartItem((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.largeqty > 0
            ? { ...item, largeqty: item.largeqty + 1 }
            : item
        )
      );
    } else {
      setCartItem((prevCart) => [
        ...prevCart,
        { ...data, largeqty: 1, smqty: 0, medqty: 0 },
      ]);
    }
  };

  const addmediumtoCartHandler = (data) => {
    // Check if the item is already in the cart
    const isInCart = cartItem.some((item) => item.id === data.id);

    if (isInCart) {
      setCartItem((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.medqty > 0
            ? { ...item, medqty: item.medqty + 1 }
            : item
        )
      );
    } else {
      setCartItem((prevCart) => [
        ...prevCart,
        { ...data, largeqty: 0, smqty: 0, medqty: 1 },
      ]);
    }
  };

  const addsmalltoCartHandler = (data) => {
    // Check if the item is already in the cart
    const isInCart = cartItem.some((item) => item.id === data.id);

    if (isInCart) {
      setCartItem((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.smqty > 0
            ? { ...item, smqty: item.smqty + 1 }
            : item
        )
      );
    } else {
      setCartItem((prevCart) => [
        ...prevCart,
        { ...data, largeqty: 0, smqty: 1, medqty: 0 },
      ]);
    }
  };

  const minuslargeqtyHandler = (data) => {
    const IsinDisplay = display.some((item) => item.id === data.id);

    if (IsinDisplay) {
      setDisplay((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.largeqty > 0
            ? { ...item, largeqty: item.largeqty - 1 }
            : item
        )
      );
    }
  };
  const minusmediumqtyHandler = (data) => {
    const IsinDisplay = display.some((item) => item.id === data.id);

    if (IsinDisplay) {
      setDisplay((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.medqty > 0
            ? { ...item, medqty: item.medqty - 1 }
            : item
        )
      );
    }
  };
  const minussmallqtyHandler = (data) => {
    const IsinDisplay = display.some((item) => item.id === data.id);

    if (IsinDisplay) {
      setDisplay((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.smqty > 0
            ? { ...item, smqty: item.smqty - 1 }
            : item
        )
      );
    }
  };

  const setcartnullHandler = () => {
    setCartItem([]);
  };
  const cartstore = {
    displayitem: display,
    cart: cartItem,
    addDisplayItem: addDisplayItemHandler,
    addlargetoCart: addlargetoCartHandler,
    addmediumtoCart: addmediumtoCartHandler,
    addsmalltoCart: addsmalltoCartHandler,
    minuslargeqty: minuslargeqtyHandler,
    minusmediumqty: minusmediumqtyHandler,
    minussmallqty: minussmallqtyHandler,
    setcartnull: setcartnullHandler,
  };
  return (
    <Cartcontext.Provider value={cartstore}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default Cartprovider;
