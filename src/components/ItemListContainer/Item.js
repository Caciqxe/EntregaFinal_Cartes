import {Link} from "react-router-dom"; 
import {GetImg} from "../../hooks/GetImg"

const Item = ({product, quantityAdded}) => {
    const img = GetImg(product.img);

    return (
        <div>
            <Link to={(`/item/${product.id}`)}><img src={img}/></Link>
            <li>{product.name}</li>
            <li>{product.price}</li>
            <li>{product.stock === 0
              ? "Sin Stock"
              : quantityAdded
              ? `Agregados: ${quantityAdded}`
              : `En Stock: ${product.stock}`}</li>
        </div>
    );
};

export default Item;