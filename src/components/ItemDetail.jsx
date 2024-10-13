import React from "react";
import '../styles/onlyOnePCard.css';

const ItemDetail = ({ product }) => {
    console.log(product); // Para verificar que product sea un array

    if (!product || product.length === 0) {
        return <p>No se encontraron productos</p>;
    }

    return (
        <ul>
            {product.map((item, index) => (
                <li key={index}>
                    <img src={item.image} alt={item.title}/>
                    <h2>{item.title}</h2>
                    <span>{item.description}</span>
                    <p>${item.price}</p>
                    <p>Count: {item.rating.count}</p>
                    <p>Rate: {item.rating.rate}</p>
                </li>
            ))}
        </ul>
    );
}

export default ItemDetail;
