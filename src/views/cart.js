import { CartContext } from "../context/CartContext";
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Item from "../components/ItemListContainer/Item";
import NavBar from "../components/NavBar/NavBar";
import { Card } from "../components/Card/Card";

const CartView = () => {
    const hola = Boolean(document.getElementsByClassName("item")[0])
    const navigate = useNavigate();
    const { productsAdded: items, totalAmount } = useContext(CartContext);

    const goToCheckout = () => {
    navigate("/checkout");
        console.log(hola);
};
    return (
        <Card>
                <div className="carrito">
                <div>
                    {items.map((product) => {
                        const quantityAdded = product.quantityAdded;
                        return(
                            <div className="producto">
                                <Item
                                    product={product.item}
                                    quantityAdded={quantityAdded}
                                />
                            </div>
                        );

                    })}
                    {totalAmount > 0 ? (
                        <div>
                            <span>
                                Pagaras: ${totalAmount}
                            </span>
                            <button onClick={goToCheckout}>
                                Ir a Pagar
                            </button>
                        </div>
                    ):(
                        <div className="CarroVacio">Carrito se encuentra vacio, aprete el logo en la barra de navegación para volver
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default CartView;

