import React from "react";

function ProductCategory({ image, title }) {
  return (
    <div className="text-center">
      <img
        className="rounded-circle shadow"
        src={image}
        width={70}
        height={70}
        alt=""
      />
      <h5 className="h5 fw-bold text-primary mt-3">{title}</h5>
    </div>
  );
}

export default ProductCategory;
