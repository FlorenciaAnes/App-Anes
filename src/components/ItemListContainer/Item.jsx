import { useState } from 'react';
import ItemCount from '../ItemListContainer/ItemCount'


const Item = ({ product, onSum, onSub, onAdd, counter }) => {
  return (

    <div Class="card-style">
      <div Class="card mt-5ms-5" style={{ width: "18rem" }}>
        <img src={product.pictureUrl} Class="card-img-top" alt="..." />
        <div Class="card-body">
          <h5 Class="card-title">{product.title}</h5>
          <p Class="card-text">{product.description}</p>
          <h5 class="card-title">{product.price}</h5>
          <ItemCount stock={10} onAdd={onAdd}  onSum={onSum} onSub={onSub} onAdd={onAdd} counter={counter}/>
        </div>
      </div>
    </div>

  )


}

export default Item