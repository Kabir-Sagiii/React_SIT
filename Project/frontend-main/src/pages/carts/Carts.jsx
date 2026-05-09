import { useState, useEffect } from "react";
import "./Carts.css";
import { getAllCarts, removeProductFromCart } from "./cartsService";
function Carts({ loggedInUser }) {
  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getAllCarts(setCarts, loggedInUser._id);
  }, []);

  return (
    <div className="carts-containers">
      <div className="cart-data  mt-3" style={{ boxShadow: "0 0 10px blue" }}>
        <table className="table table-hover ">
          <thead className="table-light text-primary fw-bold " align="center">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody align="center">
            {carts.length > 0 ? (
              carts.map((cart) => {
                return (
                  <tr>
                    <td>
                      <img
                        style={{ boxShadow: "0 0 10px black" }}
                        className="rounded-circle"
                        src={cart.image}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </td>
                    <td>{cart.name}</td>
                    <td>{cart.price}</td>
                    <td>
                      <button
                        disabled={count === 1}
                        className="bg-primary  text-white border-0"
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      >
                        <i class="bi bi-dash "></i>
                      </button>
                      <span className="text-primary mx-2">{count}</span>
                      <button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                        className=" bg-primary border-0 text-white"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </td>
                    <td
                      onClick={() => {
                        removeProductFromCart(
                          cart._id,
                          setCarts,
                          loggedInUser._id,
                        );
                      }}
                    >
                      <i class="bi bi-trash3-fill  text-danger"></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>
                <h1>Cart is Empty</h1>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="cart-summary mt-3">s</div>
    </div>
  );
}

export default Carts;
