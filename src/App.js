import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
  const product = {
    id: 1,
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
  };
  return (
    <>
      <Navbar />
      {/*  <ItemDetail
        id={product.id}
        title={product.title}
        description={product.description}
        description_general={product.description_general}
        character_1={product.character_1}
        character_2={product.character_2}
        character_3={product.character_3}
        tallas={product.tallas}
        price={product.price}
        pictureUrl={product.pictureUrl}
        image1={product.image1}
        image2={product.image2}
        stock={product.stock}
      /> */}
      <ItemListContainer />
    </>
  );
}

export default App;

/* 

*/
