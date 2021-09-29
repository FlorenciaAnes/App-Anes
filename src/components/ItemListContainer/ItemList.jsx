import Item from "../ItemListContainer/Item"

const ItemList = ({products}) => {
    
    return (
        <ul>
            {products.map((product,i)=> {
                return <Item product={product}/>
            })}
        </ul>
    )
}

export default ItemList