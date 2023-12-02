import "./App.css";
import { Fragment, useState } from "react";

import Input from "./Component/Input/Input";
import Header from "./Component/Layout/Header";
import InputDisplay from "./Component/Input/InputDisplay";
import Cart from "./Component/Cart/Cart";


function App(props) {
  const [displayCart, setdisplayCart] = useState(false);

  const displayCartHandler = () => {
    setdisplayCart(true);
  };

  const notdisplayCartHandler = () => {
    setdisplayCart(false);
  };
  return (
    <Fragment>
    

      {displayCart && <Cart OnClose={notdisplayCartHandler} />}
      <Header OnOpen={displayCartHandler} />
      <Input />
      <InputDisplay />
    </Fragment>
  );
}

export default App;
