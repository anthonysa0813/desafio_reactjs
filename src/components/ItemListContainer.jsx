import React from "react";
import CardProdut from "./CardProdut";

const itemListContainer = () => {
  const task = new Promise((resolve, reject) => {
    resolve("Todo bien en la vida! jeje :3");
  });

  task.then((result) => {
    console.log(result);
  });
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h3>Lista de Productos...</h3>
        </div>
        <div className="row">
          <CardProdut title="Air max" price="540" stock={5} />
        </div>
      </div>
    </>
  );
};

export default itemListContainer;
