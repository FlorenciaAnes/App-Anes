import { useState } from "react";


const ItemCount = ({stock, onAdd, onSum, onSub, counter}) => {


const handleSum = () => {
    if (counter >= stock) {
        return;
    }
 onSum()
}


const handleSub = () => {
    if (counter ===0) {
        return;
    }
    onSub()
}

return (
    <>
    <p>Product: {counter}</p>
    <button onClick={handleSub}> - </button>
    <button onClick={console.log("Your purchase has been added successfully"),onAdd}> Add to cart </button>
    <button onClick={handleSum}> + </button>
    </>
)
}



export default ItemCount