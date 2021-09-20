import Navbar from './components/Navbar/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';



const App = () => {

  const [value, setValue] = useState(0);
  const [cart, setCart] = useState(0);

  const  handleSum=()=> {
    setValue(value + 1);
  }
  
  const handleSubstract=() => {
    if(value === 0) {
      return;
    }
    setValue(value - 1);
  }
  
  const handleAdd = () => {
    setCart(cart + value);
  }


    return (
      <>
       
          <Navbar onAdd={handleAdd} cart={cart}/>
          <ItemListContainer onSum={handleSum} onSubstract={handleSubstract} value={value} onAdd={handleAdd}/>
      </>
    )
}

export default App