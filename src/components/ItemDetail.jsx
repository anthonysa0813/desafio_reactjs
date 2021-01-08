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
}) => {
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
            {character_1}
          </ol>
          <ol>
            <FontAwesomeIcon className="icon-check" icon={faCheckCircle} />
            {character_2}
          </ol>
          <ol>
            <FontAwesomeIcon className="icon-check" icon={faCheckCircle} />
            {character_3}
          </ol>
        </ul>
        <span>Precio: </span>
        <strong>${price}</strong> <br />
        <span>sotck: </span>
        <strong>{stock}</strong>
        <Count stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
