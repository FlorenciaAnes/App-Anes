import { useState } from 'react';

const Item =({product, onSum, onSubstract, value, onAdd}) => {
    return (
       
        <div>
        <div Class="card mt-5ms-5" style={{width: "18rem"}}>
   <img src="https://cocolinpress.netlify.app/assets/memotest.jpg" Class="card-img-top" alt="..." />
   <div Class="card-body">
     <h5 Class="card-title">{product.title}</h5>
     <p Class="card-text">{product.description}</p>
     <a href="#" Class="btn btn-primary" onClick={onAdd}>Add to Cart</a>
     <h5 class="card-title">{product.price}</h5>
     <div class="btn-wrapper mt-3">
     <a href="#" Class="btn btn-danger me-3" onClick={onSubstract} >-</a>
     <span>{value} </span>
     <a href="#" Class="btn btn-success me-3" onClick={onSum} > +</a>
     </div>
   </div>
 </div>
         </div>
     )
       

}

export default Item 