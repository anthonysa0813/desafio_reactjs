import React, { useContext } from "react";
import { Store } from "../../store";
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
          <thead className="table-dark">
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
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
                      onClick={() => eliminarItem(item.id)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </tr>
              ))}
            </tbody>
          ) : null}
          <tbody>
            <tr>
              <button
                className="btn btn-danger mt-3 ml-3"
                onClick={() => eliminarTodo()}
              >
                Eliminar todo
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Modal;
