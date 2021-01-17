import React, { useContext, useState, useEffect } from "react";
import { Store } from "../store";
import photo from "../images/infinity.jpg";

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
          <div className="col mt-5 mb-2">
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
          <div className="col mt-5">
            <button className="btn btn-block btn-dark mb-3">IR A PAGAR</button>
            <div className="box-resumen">
              <h1>RESUMEN DEL PEDIDO</h1>
              {data.items.length > 0 ? (
                <div className="box-resumen-products">
                  {data.items.map((item) => (
                    <div className="order-count">
                      <span>{item.cantidad} productos</span>
                      <span>${item.price * item.cantidad}</span>
                    </div>
                  ))}
                  <div className="order-count">
                    <span>ENTREGA</span>
                    <span>GRATIS</span>
                  </div>
                  <div className="order-count">
                    <span>TOTAL</span>
                    <span>${data.precio}</span>
                  </div>
                </div>
              ) : (
                <h5>NO EXISTEN PRODUCTOS EN SU CARRITO..</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
