import React, { useContext, useState } from "react";
import { getFirebase, getFirestore } from "../db";
import { Store } from "../store";
import firebase from "firebase/app";

const Checkout = () => {
  const [data, setData] = useContext(Store);
  const [vendido, completadoVenta] = useState(false);
  const [ventaId, setVentaId] = useState("");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    nombres: "",
    dir: "",
    tel: "",
    email: "",
    tarjeta: "",
  });
  const db = getFirestore();

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const compra = {
    user: formData,
    items: data.items,
    priceTotal: data.precio,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      formData.nombres.trim() === "" ||
      formData.dir.trim() === "" ||
      formData.email.trim() === "" ||
      formData.tel.trim() === "" ||
      formData.tarjeta.trim() === ""
    ) {
      setError(true);
    } else {
      db.collection("ventas")
        .add(compra)
        .then((id) => {
          completadoVenta(true);
          setVentaId(id);
          setData({
            items: [],
            cantidad: 0,
            precio: 0,
          });
        })
        .catch((error) => console.log(error));
      setError(false);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Datos:</h1>
        <div className="row">
          <div className="col col-lg-6 col-sm-6 col-12">
            {error ? (
              <button className="alert alert-danger">
                Todos los campos son obligatorios
              </button>
            ) : null}
            {!vendido ? (
              <form onSubmit={handleSubmitForm}>
                <div className="row">
                  <div className="col">
                    <label>Nombres Completos:</label> <br />
                    <input
                      type="text"
                      onChange={handleChangeInput}
                      value={formData.nombres}
                      className="form-control"
                      name="nombres"
                    />
                    <label>Email:</label> <br />
                    <input
                      type="email"
                      onChange={handleChangeInput}
                      value={formData.email}
                      className="form-control"
                      name="email"
                    />
                    <label>Dirección de entrega:</label> <br />
                    <input
                      type="text"
                      onChange={handleChangeInput}
                      value={formData.dir}
                      className="form-control"
                      name="dir"
                    />
                    <label>tlf:</label> <br />
                    <input
                      type="text"
                      onChange={handleChangeInput}
                      value={formData.tel}
                      className="form-control"
                      name="tel"
                    />
                    <label>Número de Tarjeta:</label> <br />
                    <input
                      type="text"
                      onChange={handleChangeInput}
                      value={formData.tarjeta}
                      className="form-control"
                      name="tarjeta"
                    />
                    <button className="btn btn-success btn-block mt-4">
                      Pagar
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <p>
                Tu compra se realizó correctamente!, tu código ed seguimiento
                es: <strong>{ventaId.id}</strong>
              </p>
            )}
          </div>
          {!vendido ? (
            <div className="col col-lg-6 col-sm-6 col-12 mb-5">
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
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Checkout;

/* 
  <div className="col">
              
            </div>

*/
