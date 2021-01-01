import React, { useState } from "react";

import { Link } from "react-router-dom";
import Count from "./Count";

const ItemCount = ({ stock, id }) => {
  

  return (
    <>
      <Count  stock={stock} />
      <button className="btn btn-primary button__product btn-block">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
