import { useRef, useState } from "react";
import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
function OrderSummary() {
  const navigate = useNavigate();
  const storeData = useSelector((store) => {
    return store;
  });

  const [address, setAddress] = useState({
    fname: "",
    lname: "",
    city: "",
    state: "",
    pincode: "",
    hno: "",
    streetno: "",
  });
  const modeRef = useRef("online");
  const payment = () => {
    if (modeRef.current === "cod") {
      //send request to create order with userinfo,orderinfo
    } else {
      //intgrate razor pay and then send create order request
      var data = {
        address,
        ...storeData,
        amount: storeData.amount + 100,
      };

      axios
        .post("http://localhost:7878/api/order/create-order", data)
        .then((res) => {
          console.log(res.data.data.order);
          var options = {
            key: "add you key",
            amount: res.data.data.order.amount,
            currency: res.data.data.order.currency,
            order_id: res.data.data.order.id,
            name: "OWNER",
            prefill: {
              name: "kabir",
              email: "kabir@gmail.com",
              contact: 987654321,
            },
            handler: (response) => {
              console.log(response);
              axios
                .post(
                  " http://localhost:7878/api/order/verify-payment",
                  response,
                )
                .then(() => {
                  toast.success("Payment Successfull");
                  navigate("/home");
                })
                .catch(() => {
                  toast.error("payement failed");
                });
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <div className="container mt-3">
      <div className="row ">
        <div className="col-8 p-3 shadow">
          <div className="">
            <section className="">
              <h1 className="mx-5 fw-bold mt-2">Shipping Address</h1>
            </section>
            <hr />
            <section className="mt-4 mx-5">
              <section className="">
                <form>
                  <div className="container text-primary fw-bold">
                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            First Name
                          </label>
                          <input
                            value={address.fname}
                            onChange={() => {
                              setAddress({
                                ...address,
                                fname: event.target.value,
                              });
                            }}
                            placeholder="First Name"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            Last Name
                          </label>
                          <input
                            value={address.lname}
                            onChange={() => {
                              setAddress({
                                ...address,
                                lname: event.target.value,
                              });
                            }}
                            placeholder="Last Name"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            Hno
                          </label>
                          <input
                            placeholder="Hno"
                            className="form-control"
                            type="text"
                            value={address.hno}
                            onChange={() => {
                              setAddress({
                                ...address,
                                hno: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            Street No
                          </label>
                          <input
                            placeholder="Street No"
                            className="form-control"
                            type="phone"
                            value={address.streetno}
                            onChange={() => {
                              setAddress({
                                ...address,
                                streetno: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            City
                          </label>
                          <input
                            placeholder="City Name"
                            className="form-control"
                            type="text"
                            value={address.city}
                            onChange={() => {
                              setAddress({
                                ...address,
                                city: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            State
                          </label>
                          <input
                            placeholder="State"
                            className="form-control"
                            type="text"
                            value={address.state}
                            onChange={() => {
                              setAddress({
                                ...address,
                                state: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="" className="mx-2">
                            Pincode
                          </label>
                          <input
                            placeholder="Pincode"
                            className="form-control"
                            type="text"
                            value={address.pincode}
                            onChange={() => {
                              setAddress({
                                ...address,
                                pincode: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </section>
          </div>
        </div>
        <div className="col-4  p-3">
          <div className="row ">
            <div className="col">
              <h4 className="text-primary fw-bold text-center">
                Order Summary
              </h4>
            </div>
          </div>
          <hr />
          <div className="row  mx-auto my-3 text-center">
            <div className="col-6">
              <h5 className="fw-bold">Amount</h5>
            </div>
            <div className="col-6">{storeData.amount}</div>
          </div>
          <hr />
          <div className="row  mx-auto my-3 text-center">
            <div className="col-6">
              <h5 className="fw-bold">Shipping Charge</h5>
            </div>
            <div className="col-6">100</div>
          </div>
          <hr />
          <div className="row  mx-auto my-3 text-center">
            <div className="col-6">
              <h5 className="fw-bold">Final Amount</h5>
            </div>
            <div className="col-6">{storeData.amount + 100}</div>
          </div>
          <hr />
          <div className="row  mx-auto my-3 text-center">
            <div className="col-4"></div>
            <div className="col-3 form-check">
              <input
                type="radio"
                onChange={() => {
                  modeRef.current = "cod";
                }}
                name="mode"
                className=" form-check-input"
              />
              <label htmlFor="" className="m-1">
                COD
              </label>
            </div>

            <div className="col-3 form-check">
              <input
                onChange={() => {
                  modeRef.current = "online";
                }}
                type="radio"
                name="mode"
                defaultChecked
                className=" form-check-input"
              />
              <label htmlFor="" className="mx-0">
                Online
              </label>
            </div>
            <div className="col-3"></div>
          </div>
          <hr />
          <div className="row text-center">
            <div className="col">
              <button onClick={payment} className="btn btn-primary">
                Checkout for Payement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
