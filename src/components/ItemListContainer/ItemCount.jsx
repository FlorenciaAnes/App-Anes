import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {

const [counter, setCounter] = useState(initial);


return (
    <>
    <p>Counter: {counter}</p>
    <button onClick={() =>{setCounter(counter+1)}}> + </button>
    <button onClick={() =>{setCounter(counter-1)}}> - </button>
    <button onClick={() =>{console.log("Your purchase has been added successfully")}}> Add to cart </button>
    </>
)
}



export default ItemCount