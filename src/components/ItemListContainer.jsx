import React, { useState, useEffect } from "react";
import CardProdut from "./CardProdut";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();
  console.log(id);

  const productos = [
    {
      id: 1,
      category: "nike",
      title: "Nike Air Max",
      description: "Zapatillas blancas con edición ilimitada",
      description_general:
        "Zapatilla Nike Hombre CD4165 001 / Air Max Excee - Negro",
      character_1: "Posee una unidad Max Air visible en el talón.",
      character_2: "Tiene una superficie sintética con inserciones de malla.",
      character_3: "Viene con una suela de goma para mayor durabilidad.",
      tallas: [7, 8, 8.5, 9, 9.5, 10],
      price: 570,
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
      title: "adidas",
      category: "adidas",
      description: "Zapatillas Adidas Run",
      description_general: "Zapatilla ADIDAS MUJER CSWE65 001",
      character_1: "Posee una unidad Max Air visible en el talón.",
      character_2: "Tiene una superficie sintética con inserciones de malla.",
      character_3: "Viene con una suela de goma para mayor durabilidad.",
      tallas: [7, 8, 8.5, 9, 9.5, 10],
      price: 540,
      pictureUrl:
        "https://c8.alamy.com/compes/w1en45/viena-austria-agosto-30-2017-adidas-ultraboost-zapatillas-blancas-sobre-fondo-blanco-w1en45.jpg",
      image1:
        "https://i.linio.com/p/0babe6a2944cb06e8065b948afd65a06-product.webp",
      image2:
        "https://i.linio.com/p/60d2e79dce8c08b095c65e4dcbd359a9-product.webp",
      stock: 9,
    },
    {
      id: 3,
      title: "Adidas Atletics",
      category: "adidas",
      description: "Zapatillas edición ilimitada",
      description_general: "Zapatilla Adidas Hombre CD4ad3",
      character_1: "Posee una unidad Max Air visible en el talón.",
      character_2: "Tiene una superficie sintética con inserciones de malla.",
      character_3: "Viene con una suela de goma para mayor durabilidad.",
      tallas: [7, 8, 8.5, 9, 9.5, 10],
      price: 490,
      pictureUrl:
        "https://i.pinimg.com/564x/ff/cb/d5/ffcbd538e0aa8412ccfa693ea0f7daa4.jpg",
      image1:
        "https://i.linio.com/p/0babe6a2944cb06e8065b948afd65a06-product.webp",
      image2:
        "https://i.linio.com/p/60d2e79dce8c08b095c65e4dcbd359a9-product.webp",
      stock: 7,
    },
    {
      id: 4,
      title: "Puma Runner",
      category: "puma",
      description: "edición Especial",
      description_general: "Zapatilla Puma Hombre AS165 021 / PUMA",
      character_1: "Posee una unidad Max Air visible en el talón.",
      character_2: "Tiene una superficie sintética con inserciones de malla.",
      character_3: "Viene con una suela de goma para mayor durabilidad.",
      tallas: [7, 8, 8.5, 9, 9.5, 10],
      price: 840,
      pictureUrl:
        "https://contents.mediadecathlon.com/p1924565/k$b6ebf7c70a8ef3207eed3baadb6061ca/sq/ZAPATILLAS+DE+TENIS+PUMA+SMASH+BLANCO+Y+AZUL.jpg",
      image1:
        "https://i.linio.com/p/0babe6a2944cb06e8065b948afd65a06-product.webp",
      image2:
        "https://i.linio.com/p/60d2e79dce8c08b095c65e4dcbd359a9-product.webp",
      stock: 4,
    },
  ];

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        const productsCategory = productos.filter(
          (item) => item.category == id
        );
        resolve(productsCategory);
      } else {
        resolve(productos);
      }
    }, 500);
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct.then((response) => setProducts(response));
  }, [id]);

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
              pictureUrl={item.pictureUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
