import React, { useState, useEffect } from "react";
import CardProdut from "./CardProdut";
import { getFirestore } from "../db/index";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const db = getFirestore();
      try {
        const data = db.collection("productos").get();
        const arr = (await data).docs.map((i) => ({ id: i.id, ...i.data() }));
        setProducts(arr);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProductos();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {products.length > 0 ? (
            <h3>Lista de Productos...</h3>
          ) : (
            <h3>Cargando...</h3>
          )}
        </div>
        <div className="row">
          {products.map((item) => (
            <CardProdut
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              stock={item.stock}
              pictureUrl={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
