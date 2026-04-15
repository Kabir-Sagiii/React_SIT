import { useState } from "react";
import "./Products.css";
import { getAllProducts } from "./productsService.js";
function Products() {
  var [products, setProducts] = useState(null);

  return (
    <div>
      <h1>Users Information</h1>
      <button
        onClick={() => {
          getAllProducts(setProducts);
        }}
      >
        Get Users
      </button>

      <div className="user-container">
        {products &&
          products.map((user) => {
            return (
              <div className="card" key={user.email}>
                <img
                  src={user.picture.medium}
                  width={"100%"}
                  height={230}
                  alt=""
                />
                <h2>{user.name.first + user.name.last}</h2>
                <p>{user.gender}</p>
                <p>{user.email}</p>
                <button>Profile Details</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
