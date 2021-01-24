import React from "react";
import { Button } from "react-bootstrap";

import photoPortada from "../images/photo_portada.jpg";

const Portada = () => {
  return (
    <>
      <div className="container-portada">
        {/* <img src={photoPortada} alt="" /> */}
        <div className="text-portada">
          <h2>La mejor cura: "Correr..."</h2>
          <span>Encuentra el equilibrio entrenando</span> <br />
          <hr />
          <Button variant="outline-primary">Facebook</Button>
        </div>
      </div>
    </>
  );
};

export default Portada;
