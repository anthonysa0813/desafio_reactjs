import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/categorias/adidas"}>
              Adidas<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/categorias/nike"}>
              Nike
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/categorias/puma"}>
              Puma
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/carrito">
              Carrito <FontAwesomeIcon icon={faStore} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartWidget;
