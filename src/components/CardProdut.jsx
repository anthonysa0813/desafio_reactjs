import React, { useState } from "react";

import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const CardProdut = ({ title, price, pictureUrl, id, description, stock }) => {
  return (
    <>
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
          <ItemCount stock={stock} id={id} />
        </div>
      </div>
    </>
  );
};

export default CardProdut;
