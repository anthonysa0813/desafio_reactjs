import React from "react";
import Count from "./Count";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
  item,
}) => {
  const producto = {
    id: id,
    title: title,
    price: price,
    stock: stock,
  };

  return (
    <div className="contenedor">
      <h1 className="title">{title}</h1>
      <img className="image" src={pictureUrl} alt={title} />
      <div className="info">
        <strong>Descripción:</strong>
        <hr />
        <ul>
          <ol>
            <FontAwesomeIcon className="icon-check" icon={faCheckCircle} />
            Tiene una superficie de cuero sintético con perforaciones para
            permitir una óptima ventilación.
          </ol>
          <ol>
            <FontAwesomeIcon className="icon-check" icon={faCheckCircle} />
            Cuenta con una suela exterior que te garantiza una larga
            durabilidad.
          </ol>
          <ol>
            <FontAwesomeIcon className="icon-check" icon={faCheckCircle} />
            Añade un forro interior textil para darle comodidad a tus pies.
          </ol>
        </ul>
        <span>Precio: </span>
        <strong>${price}</strong> <br />
        <span>stock: </span>
        <strong>{stock}</strong>
        <Count stock={stock} item={producto} />
      </div>
    </div>
  );
};

export default ItemDetail;
