import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Store } from "../store";
import ButtonAddCart from "./ButtonAddCart";
import { parse } from "@fortawesome/fontawesome-svg-core";

const Count = ({ stock, item }) => {
  const [data, setData] = useContext(Store);
  const [check, setCheck] = useState([]);

  const [count, setCount] = useState(0);
  const aumentarCount = () => {
    setCount(count < stock ? count + 1 : stock);
  };

  const disminuirCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  /* const addCount = (item) => {
    if (data.items.length >= 1) {
      const result = data.items.find((i) => i.id === item.id);
      setData({
        ...data,
        cantidad: count + count,
        items: [result],
      });
    } else {
      setData({
        ...data,
        cantidad: count,
        items: [...data.items, item],
      });
    }
  };
 */

  const addCount = () => {
    const productoAgregado = {
      ...item,
      cantidad: 0,
    };
    if (true) {
      const resultado = data.items.find((i) => i.id === productoAgregado.id);
      if (resultado) {
        console.log(resultado);
        console.log("si existe");
        resultado.cantidad += count;
        setData({
          ...data,
          cantidad: data.cantidad + count,
          items: [...data.items],
          precio: item.price * parseInt(count),
        });
      } else {
        productoAgregado.cantidad = count;
        setData({
          ...data,
          cantidad: data.cantidad + count,
          items: [...data.items, productoAgregado],
          precio: item.price * parseInt(count),
        });
      }
    }
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
