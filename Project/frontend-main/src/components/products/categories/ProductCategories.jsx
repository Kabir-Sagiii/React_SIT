import React from "react";
import ProductCategory from "./ProductCategory";
function ProductCategories() {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <ProductCategory image={""} title={"All"} />
      <ProductCategory image={""} title={"Electronics"} />
      <ProductCategory image={""} title={"Mens"} />
      <ProductCategory image={""} title={"Womens"} />
      <ProductCategory image={""} title={"Kids"} />
      <ProductCategory image={""} title={"Furniture"} />
      <ProductCategory image={""} title={"Cosmetics"} />
    </div>
  );
}

export default ProductCategories;
