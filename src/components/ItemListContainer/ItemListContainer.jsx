import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList"



const products = [
  {
    id: 1,
    title: "Bingo de Bichos",
    price: 14,
    pictureUrl: "https://cocolinpress.netlify.app/assets/memotest.jpg",
    description: "Bingo with bugs to learn by playing. From two years old. Up to 6 players"
  },
  {
    id: 2,
    title: "Dominó de Emociones",
    price: 12,
    pictureUrl: "https://cocolinpress.netlify.app/assets/emociones.jpg",
    description: "Play with emotions! A domino to have fun and teach children about the different emotions we can go through.The best way to learn is by playing. Number of dominoes: 55 large dominoes"
  },
  {
    id: 3,
    title: "Dino Habitats",
    price: 7,
    pictureUrl: "https://cocolinpress.netlify.app/assets/dinos.jpg",
    description: "It contains 12 dinosaurs of 3 x 3 cm (approx.) with three-dimensional sticker on the back and a fold-out habitat to stick them in."
  }

]


const ItemListContainer = () => {
  const [StarterList, setStarterList] = useState([])

  useEffect(() => {
    const getItems = new Promise((res) => {
      setTimeout(() => {
        res(products)
      }, 2000)
    })

    getItems
      .then((resolve) => {
        setStarterList(resolve)
      })

  })

  return (
    <>
      <ItemList products={StarterList} />
    </>
  )

}

export default ItemListContainer;