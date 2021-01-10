import React from "react";

import ButtonAddCart from "./ButtonAddCart";
import Count from "./Count";

const ItemCount = ({ stock, id }) => {
  return (
    <>
      <Count stock={stock} id={id} />
      <ButtonAddCart />
    </>
  );
};

export default ItemCount;
