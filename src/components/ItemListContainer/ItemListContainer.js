import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {item} from "../../mocks/items";
import NavBar from "../NavBar/NavBar";
import { GetItem } from "../../hooks/GetItem";

const ItemListContainer = () => {
    const products = GetItem();
    
    if (!products) {
        return <p>Cargando</p>;
    }

    return (
        <div>
            <NavBar/>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;