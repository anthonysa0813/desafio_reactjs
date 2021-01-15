import React, { useContext } from "react";
import { Store } from "../../store";
import { NavLink } from "react-router-dom";
import ItemDetail from "../ItemDetail";

const Modal = () => {
  const [data, setData] = useContext(Store);

  const eliminarItem = (id) => {
    setData({
      ...data,
      items: [...data.items.filter((i) => i.id !== id)],
    });
  };

  const eliminarTodo = () => {
    setData({
      cantidad: 0,
      items: [],
    });
  };

  return (
    <>
      <div className="modal-cart">
        <table className="table">
          {data.items.length > 0 ? (
            <thead className="table-dark">
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
          ) : null}
          {data.items.length > 0 ? (
            <tbody>
              {data.items.map((item) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.cantidad}</td>
                  <td>{data.precio}</td>
                  {data.items.length > 0 ? (
                    <button
                      className="btn btn-sm btn-warning mt-2"
                      onClick={() => eliminarItem(item)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </tr>
              ))}
            </tbody>
          ) : (
            <h3 className="text-center">
              No hay items agregados...
              <NavLink to={"/"}>ver productos </NavLink>
            </h3>
          )}
          {data.items.length > 0 && (
            <tbody>
              <tr>
                <th>
                  <button
                    className="btn btn-danger mt-3 ml-3"
                    onClick={() => eliminarTodo()}
                  >
                    Eliminar todo
                  </button>
                </th>
                <th>
                  <NavLink to={"/carrito"}>
                    <button className="btn btn-success mt-3 ml-3">Pagar</button>
                  </NavLink>
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Modal;
