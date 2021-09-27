import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Nav';





const App = () => {

  const [value, setValue] = useState(0);
  const [cart, setCart] = useState(0);

  const handleSum = () => {
    setValue(value + 1);
  }

  const handleSub = () => {
    if (value === 0) {
      return;
    }
    setValue(value - 1);

  }

  const handleAdd = () => {
    setCart(cart + value);
    setValue(0)
  }


  return (
    <>

      <Navbar cart={cart} />
      <ItemListContainer onSum={handleSum} onSub={handleSub} value={value} onAdd={handleAdd} />


    </>
  )
}

export default App