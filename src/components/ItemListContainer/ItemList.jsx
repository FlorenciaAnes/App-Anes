import Item from "../ItemListContainer/Item"

const ItemList = ({products, onSum, onSub, onAdd, counter}) => {
    
    return (
        <ul>
            {products.map((product,i)=> {
                return <Item product={product}  onSum={onSum} onSub={onSub} onAdd={onAdd}  counter={counter}/>
            })}
        </ul>
    )
}

export default ItemList