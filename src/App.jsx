import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Nav';






const App = () => {

  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState(0);

  const handleAdd = () => {
    setCart(cart + counter);
    setCounter(0)
  }


  return (
    <>

      <Navbar cart={cart} />
      <ItemListContainer />


    </>
  )
}

export default App