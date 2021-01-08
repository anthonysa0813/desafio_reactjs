import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Store } from "../store";
import ButtonAddCart from "./ButtonAddCart";

const Count = ({ stock }) => {
  const [data, setData] = useContext(Store);

  const [count, setCount] = useState(0);
  const aumentarCount = () => {
    setCount(count < stock ? count + 1 : stock);
  };

  const disminuirCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const addCount = () => {
    setData({ ...data, cantidad: count });
  };

  return (
    <>
      <div className="content__info-count">
        <FontAwesomeIcon icon={faMinus} onClick={() => disminuirCount()} />
        {count}
        <FontAwesomeIcon icon={faPlus} onClick={() => aumentarCount()} />
      </div>
      <button
        className="btn btn-primary btn-block mt-2"
        onClick={() => addCount()}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default Count;
