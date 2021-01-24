import React from "react";

const Resumen = ({data}) => {
  
  return (
    <>
      <div className="box-resumen">
        <h1>RESUMEN DEL PEDIDO</h1>
        {data.items.length > 0 ? (
          <div className="box-resumen-products">
            {data.items.map((item) => (
              <div className="order-count">
                <span>{item.cantidad} producto(s)</span>
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
    </>
  );
};

export default Resumen;
