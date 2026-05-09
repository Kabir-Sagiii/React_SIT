import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

function ProductCard({
  product: { image, id, name, price, description, rating, category },
  loggedInUser,
}) {
  const addProductInCart = (cartProduct) => {
    axios
      .post("http://localhost:7878/api/carts/cart", cartProduct)
      .then((res) => {
        toast.success("Added in the cart", { autoClose: 2000 });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="card w-25">
      <div className="card-header">
        <img src={image} width={"100%"} height={230} alt="" />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <h5 className=" h5 text-success">{name.slice(0, 21)}</h5>
          </div>
          <div className="col-6 text-end ">
            {rating}
            {/* <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i> */}
          </div>
        </div>
        <div className="row">
          <p className="fst-italic">{description}</p>
        </div>
        <div className="row my-2">
          <div className="col-4">
            <p className="text-success">$ {price}</p>
          </div>
          <div className="col-8 text-end">
            <h5 className="h5">{category}</h5>
          </div>
        </div>

        {false ? (
          <button className="btn w-100 btn-outline-danger">
            Remove From Cart
          </button>
        ) : (
          <button
            className="btn w-100 btn-outline-success"
            onClick={() => {
              addProductInCart({
                ...{ image, id, name, price, description, rating, category },
                userid: loggedInUser._id,
              });
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
