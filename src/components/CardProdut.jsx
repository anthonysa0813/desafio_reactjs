import React, { useState } from "react";
import air from "../images/ari_mujer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "./ItemCount";

const CardProdut = ({ title, price }) => {
  const [count, setCount] = useState(0);

  const aumentarCount = () => {
    setCount(count + 1);
  };

  const disminuirCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div class="card" style={{ width: "18rem;" }}>
        <img
          src={air}
          class="card-img-top"
          alt="..."
          className="card__producto-image"
        />
        <div class="card-body text-center">
          <div className="content__info">
            <h5 class="card-title">{title}</h5>
            <h4 className="price__product">${price}</h4>
          </div>
          <ItemCount />
        </div>
      </div>
    </>
  );
};

export default CardProdut;
