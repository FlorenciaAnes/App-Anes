import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Nav";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState(0);

  const handleSum = () => {
  
    setCounter(counter + 1);
  };

  const handleSub = () => {
  
    setCounter(counter - 1);
  };


  const handleAdd = () => {
    setCart(cart + counter);
    setCounter(1)
  }

  return (
    <>
      <Navbar cart={cart}/>
      <ItemListContainer onSum={handleSum} onSub={handleSub} onAdd={handleAdd}  counter={counter}/>
    </>
  );
};

export default App;
