import {useEffect, useState} from "react";
import ItemList from "./ItemList";

const products= [
{id: 1, 
title: "Bingo de Bichos", 
price: 14, 
pictureUrl: "https://cocolinpress.netlify.app/assets/memotest.jpg",
description: "Bingo with bugs to learn by playing. From two years old. Up to 6 players" }, 
]


const ItemListContainer =({onSum, OnSubstract, valor, onAdd}) => {
  const [StarterList, setStarterList] = useState ([])
  
useEffect(() => {
  const getItems = new Promise ((res) => {
    setTimeout (() => {
      res(products)
    }, 2000)
  })

getItems
.then((resolve) => {
  setStarterList(resolve)
})

})

return (
  <ItemList products = {StarterList}/>
)

}

export default ItemListContainer; 