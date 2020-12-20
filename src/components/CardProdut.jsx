import React, { useState } from "react";

import ItemCount from "./ItemCount";

const CardProdut = ({ title, price, pictureUrl, id, description, stock }) => {
  return (
    <>
      <div class="card">
        <img
          src={pictureUrl}
          class="card-img-top"
          alt="..."
          className="card__producto-image"
        />
        <div class="card-body text-center">
          <div className="content__info">
            <h5 class="card-title">{title}</h5>
            <h4 className="price__product">${price}</h4>
          </div>
          <ItemCount stock={stock} />
        </div>
      </div>
    </>
  );
};

export default CardProdut;
