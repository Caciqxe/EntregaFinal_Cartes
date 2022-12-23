import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { GetItem } from "../../hooks/GetItem";


import { item as itemMock } from "../../mocks/items";
import NavBar from "../NavBar/NavBar";

const ItemDetailContainer = () => {
    
    const item = GetItem()
    if (!item) {
        return <p>Cargando</p>;
    }

    return (
    <div>
        <NavBar />
        <ItemDetail item={item} />
    </div>);
};

export default ItemDetailContainer;