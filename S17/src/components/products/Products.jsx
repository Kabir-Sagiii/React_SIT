import { useState } from "react";
import "./Products.css";
import { getAllProducts } from "./productsService.js";
function Products() {
  var [products, setProducts] = useState(null);

  return (
    <div>
      <h1>Products Information</h1>
      <button
        onClick={() => {
          getAllProducts(setProducts);
        }}
      >
        Get Products
      </button>
    </div>
  );
}

export default Products;
