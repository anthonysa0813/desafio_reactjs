import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Store } from "../store";
import ButtonAddCart from "./ButtonAddCart";
import { parse } from "@fortawesome/fontawesome-svg-core";

const Count = ({ stock, item }) => {
  const [data, setData] = useContext(Store);
  const [check, setCheck] = useState([]);
  const [error, setError] = useState(false);

  const [count, setCount] = useState(0);
  const aumentarCount = () => {
    setCount(count < stock ? count + 1 : stock);
  };

  const disminuirCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const addCount = () => {
    const productoAgregado = {
      ...item,
      cantidad: 0,
    };

    console.log(productoAgregado);
    if (true) {
      const resultado = data.items.find((i) => i.id === productoAgregado.id);
      if (resultado) {
        resultado.cantidad += count;
        data.items.price *= count;
        console.log(typeof data.cantidad);
        console.log(typeof data.items.price);
        setData({
          ...data,
          cantidad: data.cantidad + count,
          items: [...data.items],
        });
      } else if (!count) {
        setError(true);
      } else {
        productoAgregado.cantidad = count;
        setData({
          ...data,
          cantidad: data.cantidad + count,
          items: [...data.items, productoAgregado],
        });
        setError(false);
      }
    }
  };
  return (
    <>
      {error ? (
        <button className="alert alert-danger">Agregue una cantidad</button>
      ) : null}
      <div className="content__info-count ">
        <FontAwesomeIcon icon={faMinus} onClick={() => disminuirCount()} />
        {count}
        <FontAwesomeIcon icon={faPlus} onClick={() => aumentarCount()} />
      </div>
      <button
        className="btn btn-primary mt-4 btn-block"
        onClick={() => addCount()}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default Count;
