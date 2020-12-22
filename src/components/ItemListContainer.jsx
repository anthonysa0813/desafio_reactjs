import React, { useState, useEffect } from "react";
import CardProdut from "./CardProdut";

const ItemListContainer = () => {
  const getProduct = new Promise((resolve, reject) => {
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
        {
          id: 2,
          title: "Nike Mujer",
          description: "Zapatillas blancas con edición ilimitada",
          price: 370,
          pictureUrl:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e28f3a9d-b6d8-4b5e-b885-504c97f40312/air-max-plus-zapatillas-TQVX3q.jpg",
          stock: 7,
        },
        {
          id: 3,
          title: "Nike Infinity",
          description: "Zapatillas blancas con edición ilimitada",
          price: 420,
          pictureUrl:
            "https://ep01.epimg.net/elpais/imagenes/2020/01/07/escaparate/1578393787_794117_1578409548_sumario_normal.jpg",
          stock: 3,
        },
        {
          id: 4,
          title: "Runner",
          description: "Zapatillas blancas con edición ilimitada",
          price: 730,
          pictureUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQLIZ6z9ide7a-H8dnalQ1qypLoO1Fi6Itw&usqp=CAU",
          stock: 5,
        },
      ]);
    }, 3000);
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct.then((response) => setProducts(response));
  }, []);

  console.log(products);

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
              title={item.title}
              price={item.price}
              stock={item.stock}
              pictureUrl={item.pictureUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
