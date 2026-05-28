import { useState, useEffect } from "react";
import "./Carts.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCarts, removeProductFromCart } from "./cartsService";
function Carts({ loggedInUser }) {
  const dispatch = useDispatch();
  var subtotal = 0;
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getAllCarts(setCarts, loggedInUser._id);
  }, []);

  const checkout = () => {
    dispatch({
      type: "amount",
      payload:
        (carts.length > 0 &&
          carts.reduce((subtotal, cart) => {
            return subtotal + cart.price;
          }, subtotal)) -
        5 * 94,
    });
  };

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
                    <td>${cart.price}</td>
                    <td>
                      <button className="bg-primary  text-white border-0">
                        <i class="bi bi-dash "></i>
                      </button>
                      <span className="text-primary mx-2">1</span>
                      <button className=" bg-primary border-0 text-white">
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
      <div className="cart-summary ">
        <div className=" mt-3">
          <div className="row mt-3">
            <h3 className="text-success text-center">Cart Summary</h3>
            <hr />
          </div>
          <div className="row text-center">
            <div className="col-8">
              <h5 className="text-success">Sub Total</h5>
            </div>
            <div className="col-4">
              <p>
                ${" "}
                {carts.length > 0 &&
                  carts.reduce((subtotal, cart) => {
                    return subtotal + cart.price;
                  }, subtotal)}
              </p>
            </div>
            <hr />
          </div>
          <div className="row text-center">
            <div className="col-8">
              <h5 className="text-success">Discount</h5>
            </div>
            <div className="col-4">
              <p>$ 5</p>
            </div>
            <hr />
          </div>
          <div className="row text-center">
            <div className="col-8">
              <h5 className="text-success fw-bold"> Total Amount</h5>
            </div>
            <div className="col-4">
              <p className="fw-bold">
                $
                {(carts.length > 0 &&
                  carts.reduce((subtotal, cart) => {
                    return subtotal + cart.price;
                  }, subtotal)) -
                  5 * 94}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/order-summary">
            <button className="btn w-75 btn-success p-2" onClick={checkout}>
              Proceed for Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carts;
