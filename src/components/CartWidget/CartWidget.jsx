import './CartWidget.css'

const CartWidget = ({ cart }) => {
    return (
        <div className="cart-widget">
            <p className="material-icons">add_shopping_cart</p>
            <span ClassName="number">{cart}</span>
        </div>
    )

}

export default CartWidget