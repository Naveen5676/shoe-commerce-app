import React from "react";

const Cartcontext = React.createContext({
    displayitem:[],
    cart:[],
    addDisplayItem:(data)=>{},
    addlargetoCart:(data)=>{},
    addmediumtoCart:(data)=>{},
    addsmalltoCart:(data)=>{},




})

export default Cartcontext