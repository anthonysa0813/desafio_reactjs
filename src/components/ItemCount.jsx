import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const aumentarCount = () => {
    setCount(count + 1);
  };

  const disminuirCount = () => {
    setCount(count > 0 ? count - 1 : null);
  };
  return (
    <>
      <div className="content__info-count">
        <FontAwesomeIcon icon={faMinus} onClick={() => disminuirCount()} />
        {count}
        <FontAwesomeIcon icon={faPlus} onClick={() => aumentarCount()} />
      </div>
      <button className="btn btn-primary button__product">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
