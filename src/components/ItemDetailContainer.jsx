import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
  const Product = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Nike Air Max",
          description: "Zapatillas blancas con edición ilimitada",
          description_general:
            "Zapatilla Nike Hombre CD4165 001 / Air Max Excee - Negro",
          character_1: "Posee una unidad Max Air visible en el talón.",
          character_2:
            "Tiene una superficie sintética con inserciones de malla.",
          character_3: "Viene con una suela de goma para mayor durabilidad.",
          tallas: [7, 8, 8.5, 9, 9.5, 10],
          price: 540,
          pictureUrl:
            "https://i.linio.com/p/72356553f6083281f2c8fb49427d8030-product.webp",
          image1:
            "https://i.linio.com/p/0babe6a2944cb06e8065b948afd65a06-product.webp",
          image2:
            "https://i.linio.com/p/60d2e79dce8c08b095c65e4dcbd359a9-product.webp",
          stock: 5,
        },
      ]);
    }, 3000);
  });

  useEffect(() => {
    Product.then((response) => setProduct(response));
  }, []);

  const [prod, setProduct] = useState([]);
  return (
    <>
      {prod.map((producto) => (
        <ItemDetail
          key={producto.id}
          title={producto.title}
          description={producto.description}
          description_general={producto.description_general}
          character_1={producto.character_1}
          character_2={producto.character_2}
          character_3={producto.character_3}
          tallas={producto.tallas}
          price={producto.price}
          pictureUrl={producto.pictureUrl}
          image1={producto.image1}
          image2={producto.image2}
          stock={producto.stock}
        />
      ))}
    </>
  );
};

export default ItemDetailContainer;
