import shoppingCart from './shopping-cart.png';
import './CartWidget.css';

function CartWidget() {
    return (
        <img src={shoppingCart} className="shoppingCart" alt="Carrito de compra" />
    )
}

export default CartWidget;
