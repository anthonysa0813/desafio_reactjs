import React, { useState } from "react";

import { Link } from "react-router-dom";
import ButtonAddCart from "./ButtonAddCart";
import Count from "./Count";

const ItemCount = ({ stock, id }) => {
  return (
    <>
      <Count stock={stock} />
      <ButtonAddCart />
    </>
  );
};

export default ItemCount;
