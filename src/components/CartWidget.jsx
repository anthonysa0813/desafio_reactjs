import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Store } from "../store";
import Modal from "./general/Modal";
const CartWidget = () => {
  const [activeModal, setActiveModal] = useState(false);

  const mostrarModal = () => {
    setActiveModal(!activeModal);
  };

  const [data, setData] = useContext(Store);

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={"/categorias/adidas"}
            >
              Adidas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/categorias/nike"}>
              Nike
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/categorias/puma"}>
              Puma
            </NavLink>
          </li>
          <li className="nav-item" onClick={() => mostrarModal()}>
            <div className="nav-link carrito">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="contador">
                <span>{data.cantidad}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {activeModal ? <Modal /> : null}
    </>
  );
};

export default CartWidget;
