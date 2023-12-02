import React from "react";

const Cartcontext = React.createContext({
  displayitem: [],
  cart: [],
  addDisplayItem: (data) => {},
  addlargetoCart: (data) => {},
  addmediumtoCart: (data) => {},
  addsmalltoCart: (data) => {},
  minuslargeqty: (data) => {},
  minusmediumqty: (data) => {},
  minussmallqty: (data) => {},
  setcartnull: () => {},
});

export default Cartcontext;
