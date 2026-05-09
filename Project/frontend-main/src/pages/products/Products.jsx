import { useState, useEffect } from "react";
import "./Products.css";
import ProductCategories from "../../components/products/categories/ProductCategories";
import ProductCard from "../../components/products/product-card/ProductCard";
import { getAllCategories } from "./productsService";
function Products({ loggedInUser }) {
  const [categories, setCategoris] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getAllCategories(setCategoris, setProducts);
  }, []);

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
        <ProductCategories categories={categories} setProducts={setProducts} />
      </section>

      <section className="d-flex flex-wrap my-5 justify-content-evenly gap-3">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <ProductCard loggedInUser={loggedInUser} product={product} />
            );
          })}
      </section>
    </div>
  );
}

export default Products;
