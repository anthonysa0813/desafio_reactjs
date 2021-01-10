import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [prod, setProduct] = useState([]);
  const listaProductos = [
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
      title: "adidas",
      category: "adidas",
      description: "Zapatillas blancas con edición ilimitada",
      description_general:
        "Zapatilla Nike Hombre CD4165 001 / Air Max Excee - Negro",
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
      stock: 5,
    },
    {
      id: 3,
      title: "Nike War",
      category: "adidas",
      description: "Zapatillas edición ilimitada",
      description_general:
        "Zapatilla Nike Hombre CD4165 001 / Air Max Excee - Negro",
      character_1: "Posee una unidad Max Air visible en el talón.",
      character_2: "Tiene una superficie sintética con inserciones de malla.",
      character_3: "Viene con una suela de goma para mayor durabilidad.",
      tallas: [7, 8, 8.5, 9, 9.5, 10],
      price: 540,
      pictureUrl:
        "https://i.pinimg.com/564x/ff/cb/d5/ffcbd538e0aa8412ccfa693ea0f7daa4.jpg",
      image1:
        "https://i.linio.com/p/0babe6a2944cb06e8065b948afd65a06-product.webp",
      image2:
        "https://i.linio.com/p/60d2e79dce8c08b095c65e4dcbd359a9-product.webp",
      stock: 5,
    },
    {
      id: 4,
      title: "Puma Runner",
      category: "puma",
      description: "edición ilimitada",
      description_general:
        "Zapatilla Nike Hombre CD4165 001 / Air Max Excee - Negro",
      character_1: "Posee una unidad Max Air visible en el talón.",
      character_2: "Tiene una superficie sintética con inserciones de malla.",
      character_3: "Viene con una suela de goma para mayor durabilidad.",
      tallas: [7, 8, 8.5, 9, 9.5, 10],
      price: 540,
      pictureUrl:
        "https://contents.mediadecathlon.com/p1924565/k$b6ebf7c70a8ef3207eed3baadb6061ca/sq/ZAPATILLAS+DE+TENIS+PUMA+SMASH+BLANCO+Y+AZUL.jpg",
      image1:
        "https://i.linio.com/p/0babe6a2944cb06e8065b948afd65a06-product.webp",
      image2:
        "https://i.linio.com/p/60d2e79dce8c08b095c65e4dcbd359a9-product.webp",
      stock: 5,
    },
  ];
  const Product = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoClick = listaProductos.filter((item) => item.id == id);
      resolve(productoClick);
    }, 500);
  });

  useEffect(() => {
    Product.then((response) => setProduct(response));
  }, []);

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
          pictureUrl={producto.pictureUrl}
          image1={producto.image1}
          image2={producto.image2}
          stock={producto.stock}
          item={prod}
        />
      ))}
    </>
  );
};

export default ItemDetailContainer;
