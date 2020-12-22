import React from "react";

const ItemDetail = ({
  id,
  title,
  description,
  description_general,
  character_1,
  character_2,
  character_3,
  tallas,
  price,
  pictureUrl,
  image1,
  image2,
  stock,
}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ItemDetail;
