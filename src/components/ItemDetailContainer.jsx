import React, { useEffect, useState } from "react";
import productsData from "../assets/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import '../styles/onlyOnePCard.css';

const ItemDetailContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { id } = useParams();

  console.log("Datos importados del JSON:", productsData); // Depuración

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let productsFiltered = [];

          if (id) {
            productsFiltered = productsData.filter((product) => product.id === parseInt(id)); // Filtra productos
          } else {
            productsFiltered = productsData; // Si no hay id, devuelve todos los productos
            console.log("Mostrando todos los productos:", productsFiltered);
          }

          resolve(productsFiltered); // Resuelve la promesa con los productos filtrados
        }, 2000); // Simula un retraso de 2 segundos
      });
    };

    fetchProducts().then((data) => {
      setFilteredProducts(data); // Establece los productos filtrados en el estado
      setLoading(false); // Cambia el estado de carga a falso
    });
  }, [id]);

  // Mensaje de carga
  if (loading) {
    return <p className="cargaProd">Cargando producto...</p>;
  }

  return (
    <div className="CardCSS">
      <ItemDetail product={filteredProducts} /> {/* Muestra los productos filtrados */}
    </div>
  );
};

export default ItemDetailContainer;
