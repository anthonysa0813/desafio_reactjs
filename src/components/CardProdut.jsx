import React, { useState } from "react";

import Count from "./Count";
import { Link } from "react-router-dom";

const CardProdut = ({ title, price, pictureUrl, id, description, stock }) => {
  const item = {
    id: id,
    title: title,
    price: price,
    image: pictureUrl,
    stock: stock,
  };

  return (
    <>
      <div className="container-card">
        <div className="container-card__image">
          <Link to={`/item/${id}`}>
            {" "}
            <img src={pictureUrl} alt="..." className="card__producto-image" />
          </Link>
        </div>
        <div className="container-card__info">
          <div className="content__info">
            <h5 class="card-title">{title}</h5>
            <h4 className="price__product">${price}</h4>
          </div>
          <Count stock={stock} id={id} item={item} />
        </div>
      </div>
    </>
  );
};

export default CardProdut;

/* 
<div class="card">
        <Link to={`/item/${id}`}>
          {" "}
          <img
            src={pictureUrl}
            class="card-img-top"
            alt="..."
            className="card__producto-image"
          />
        </Link>

        <div class="card-body text-center">
          <div className="content__info">
            <h5 class="card-title">{title}</h5>
            <h4 className="price__product">${price}</h4>
          </div>
          <Count stock={stock} id={id} item={item} />
        </div>
      </div>
*/
