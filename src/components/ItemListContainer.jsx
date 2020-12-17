import React from "react";
import CardProdut from "./CardProdut";

const itemListContainer = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h3>Lista de Productos...</h3>
        </div>
        <div className="row">
          <CardProdut title="Air max" price="540" />
        </div>
      </div>
    </>
  );
};

export default itemListContainer;
