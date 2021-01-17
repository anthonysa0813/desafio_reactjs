import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../db/index";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [prod, setProduct] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const getProducto = async () => {
      db.collection("productos")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setProduct([doc.data()]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducto();
  }, []);

  console.log(prod);

  return (
    <>
      {prod.map((producto) => (
        <ItemDetail
          key={producto.id}
          id={producto.id}
          title={producto.title}
          description={producto.description}
          description_general={producto.description_general}
          character_1={producto.character_1}
          character_2={producto.character_2}
          character_3={producto.character_3}
          tallas={producto.tallas}
          price={producto.price}
          pictureUrl={producto.image}
          stock={producto.stock}
          item={prod}
        />
      ))}
    </>
  );
};

export default ItemDetailContainer;
