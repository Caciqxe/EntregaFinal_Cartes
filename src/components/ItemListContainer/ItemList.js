import Item from "./Item";
import "./ItemListContainer.css"

const ItemList = ({products}) => {
    return (
        <ul className="lista">
            {products.map((product) => (
                <Item product={product} />
            ))}
        </ul>
    );
};

export default ItemList; 