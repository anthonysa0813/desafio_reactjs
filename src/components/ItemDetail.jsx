import React, {useState} from "react";
import Count from "./Count";
import {Redirect} from 'react-router-dom'

const ItemDetail = ({
  id,
  title,
  description,
  description_general,
  character_1,
  character_2,
  character_3,
  tallas,
  price,
  pictureUrl,
  image1,
  image2,
  stock,
}) => {



  const redirectCarrito = () => {
    return (
      <Redirect to="/"  />
    )
  }
  return (
    <div className="contenedor">
      <h1 className="title">{title}</h1>
      <img className="image" src={pictureUrl} alt={title} />
      <div className="info">
        <strong>Descripción:</strong>
        <hr />
        <ul>
          <ol>{character_1}</ol>
          <ol>{character_2}</ol>
          <ol>{character_3}</ol>
        </ul>
        <span>Precio: </span>
        <strong>${price}</strong> <br />
        <span>sotck: </span>
        <strong>{stock}</strong>
        <Count  stock={stock}/>
        <button className="btn btn-primary btn-block mt-2" onClick={() => redirectCarrito()}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
