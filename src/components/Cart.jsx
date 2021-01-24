import React, { useContext, useState, useEffect } from "react";
import { Store } from "../store";
import { Link } from "react-router-dom";
import photo from "../images/infinity.jpg";
import Resumen from "./general/Resumen";

const Cart = () => {
  const [data, setData] = useContext(Store);
  let totalPrice = 0;
  console.log(totalPrice);

  useEffect(() => {
    const total = data.items.map((i) => i.cantidad * i.price);
    total.forEach((n) => {
      totalPrice += n;
      setData({
        ...data,
        precio: totalPrice,
      });
      return totalPrice;
    });
  }, [data.items]);

  console.log(data.precio);
  return (
    <>
      <div className="container mt-5">
        <h1>TU CARRITO</h1>
        <strong>TOTAL: {data.items.length} Item </strong>

        <div className="row">
          <div className="col col-sm-8 col-md-7 col-12 mt-5 mb-2">
            {data.items
              ? data.items.map((item) => (
                  <div className="box-product mb-2">
                    <img src={item.image} alt="" />
                    <div className="info-product-cart">
                      <h3>{item.title}</h3>
                      <h4>RAW WHITE / GREY ONE / ACTIVE BLUE</h4>
                      <h5>Precio: ${item.price}</h5>
                      <h6>cantidad: {item.cantidad} </h6>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="col col-sm-4 col-md-5 col-12 mt-5">
            <Link to="/checkout" className="btn btn-block btn-dark mb-3">
              IR A PAGAR
            </Link>
            <Resumen data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

/*
 */
