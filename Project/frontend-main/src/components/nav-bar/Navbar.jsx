import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ isLoggedIn, logout }) {
  return (
    <div
      style={{ height: "15vh" }}
      className="text-white container-fluid shadow "
    >
      <div className="row h-100">
        <div className="d-flex justify-content-center align-items-center col-5  ">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="text-primary fw-bold">RVG Hike Brand's</h1>
          </Link>
        </div>

        {isLoggedIn ? (
          <div className="col-7 row d-flex justify-content-start align-items-center">
            <div className="menus col-9">
              <Link to="/home">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/contactus">Contactus</Link>
            </div>
            <div className="col-3 text-end  icons">
              <Link to="/cart">
                <i class="bi bi-cart-check-fill"></i>
              </Link>
              <Link to="/">
                <i class="bi bi-power text-danger" onClick={logout}></i>
              </Link>
            </div>
          </div>
        ) : (
          <div className="col-7 d-flex justify-content-end align-items-center">
            <Link to="/sign-in">
              <button className="btn fw-bold btn-primary mx-3">Sign In</button>
            </Link>
            <Link to="/sign-up">
              <button className="btn fw-bold btn-primary mx-3 me-5">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
