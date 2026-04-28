import React from "react";
import "./Products.css";
import ProductCategories from "../../components/products/categories/ProductCategories";
import ProductCard from "../../components/products/product-card/ProductCard";
function Products() {
  return (
    <div>
      <section className="product-banner">
        <img
          src={
            "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg"
          }
          width={"100%"}
          height={430}
        />
      </section>

      <section className="product-categories">
        <ProductCategories />
      </section>

      <section className="d-flex flex-wrap my-5 justify-content-evenly gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  );
}

export default Products;
