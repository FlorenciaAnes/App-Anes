import { useState } from 'react';
import ItemCount from '../ItemListContainer/ItemCount'


const Item = ({ product, stock, initial, onAdd }) => {
  return (

    <div Class="card-style">
      <div Class="card mt-5ms-5" style={{ width: "18rem" }}>
        <img src={product.pictureUrl} Class="card-img-top" alt="..." />
        <div Class="card-body">
          <h5 Class="card-title">{product.title}</h5>
          <p Class="card-text">{product.description}</p>
          <h5 class="card-title">{product.price}</h5>
          <ItemCount stock={10} initial={1} onAdd={() => { }} />
        </div>
      </div>
    </div>

  )


}

export default Item