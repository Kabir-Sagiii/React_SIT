import React from "react";
import { Link } from "react-router-dom";
Link;
function Navbar() {
  return (
    <div
      style={{ height: "15vh" }}
      className="text-white container-fluid shadow "
    >
      <div className="row h-100">
        <div className="d-flex justify-content-center align-items-center col-7 ">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="text-primary fw-bold">RVG Hike Brand's</h1>
          </Link>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center">
          <Link to="/sign-in">
            <button className="btn fw-bold btn-primary mx-3">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="btn fw-bold btn-primary mx-3">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
