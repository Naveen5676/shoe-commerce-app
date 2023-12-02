import React, { useState, useEffect } from "react";
import Cartcontext from "./Cartcontext";

const Cartprovider = (props) => {
  const [display, setDisplay] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const cartChange = !!cartItem;

  useEffect(() => {
    const fetchDisplaydata = async () => {
      try {
        const response = await fetch(
          "https://crudcrud.com/api/eb03232b81a94a429685cde19e3f4ab7/display"
        );
        const data = await response.json();
        setDisplay(
          data.map((displayitems) => ({
            ...displayitems,
            crudid: displayitems._id,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchDisplaydata();
  }
  , []);

  const addDisplayItemHandler = (data) => {
    fetch("https://crudcrud.com/api/eb03232b81a94a429685cde19e3f4ab7/display", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((updateddata) => {
        setDisplay((prevDisplay) => [
          ...prevDisplay,
          { ...data, crudid: updateddata._id },
        ]);
        console.log(updateddata);
      });
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
    // const IsinDisplay = display.some((item) => item.id === data.id);

    // if (IsinDisplay) {
      setDisplay((previtem) =>
        previtem.map((item) =>
          item.id === data.id && data.largeqty > 0
            ? { ...item, largeqty: item.largeqty - 1 }
            : item
        )
      );
      fetch(`https://crudcrud.com/api/eb03232b81a94a429685cde19e3f4ab7/display/${data.crudid}`,{
        method:'PUT',
        body:JSON.stringify({...data ,largeqty: Number(data.largeqty)-1}),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res)=>{
        if(!res.ok){
          throw new Error('unsuccessfull')
        }
      }).catch((err)=>{
        console.log('FROM FETCH MINUSLARGEQTY'+err)
      })
    //}
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
