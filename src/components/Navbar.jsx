import React, { useState, useContext } from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { Store } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./general/Modal";
/* import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"; */

const Navbars = () => {
  const [activeModal, setActiveModal] = useState(false);

  const mostrarModal = () => {
    setActiveModal(!activeModal);
  };

  const [data, setData] = useContext(Store);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link class="navbar-brand font-weight-light" to="/">
          Lasfam<span className="font-weight-bolder">Store</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Contactos</Nav.Link>
            <ul className="navbar-nav">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {activeModal ? <Modal /> : null}
    </>
  );
};

export default Navbars;
