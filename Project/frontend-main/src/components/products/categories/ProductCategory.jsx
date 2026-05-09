import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
function ProductCategory({ image, title, setProducts }) {
  const getCategoryData = () => {
    axios
      .get("http://localhost:7878/api/products/category-data", {
        params: {
          category: title,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="text-center" onClick={getCategoryData}>
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
