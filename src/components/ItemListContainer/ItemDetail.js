import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { GetImg } from "../../hooks/GetImg"

const ItemDetail = ({item}) => {

    const { addItem, isInCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);;

    const maxQuantity = currentStock;
    
    const img = GetImg(item.img);
    
    function handleCart() {
      navigate("/cart");
    }
    
    function handleCount(type) {
      if (type === "plus" && count < maxQuantity) setCount(count + 1);
      if (type === "minus" && count > 1) setCount(count - 1);
    }
    
      function handleAdd() {
        if (currentStock < count) {
          return (
            <p>No queda producto</p>
          );
        }
        else {
          setCurrentStock(currentStock - count);
          addItem(item, count);
        }
      }
    return(
        <div>
            {item.name}
            <img src={img} alt = "juego de mesa" />
            <p>{item.description}</p>
            <div>
                <span>
                    Precio: ${item.price}
                  
                    {currentStock > 0 && (
                    <p>En Stock: {currentStock}</p>
            )}
                </span>

            </div>
            <div>
            {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
           <div>
            <button onClick={handleAdd} disabled={currentStock === 0}>
              Agregar al carrito
            </button>
            <button disabled={!isInCart(item.id)} onClick={handleCart}>
              Ir al carrito
            </button>
          </div>
            </div>
        </div>
    );
};

export default ItemDetail;