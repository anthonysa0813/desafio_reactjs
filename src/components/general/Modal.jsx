import React, { useContext } from "react";
import { Store } from "../../store";
import ItemDetail from "../ItemDetail";

const Modal = () => {
  const [data, setData] = useContext(Store);

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
            </tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{data.cantidad}</td>
                <td>{data.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Modal;
