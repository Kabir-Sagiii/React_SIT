import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";

function Profile({ logout }) {
  return (
    <div className="profile">
      <section className="profile-menu">
        <Link to="details">
          <i className="bi bi-file-earmark-person mx-2"></i>Personal Details
        </Link>
        <Link to="orders">
          <i className="bi bi-list-ul mx-2"></i>Orders
        </Link>
        <Link to="favourites">
          <i className="bi bi-heart-fill mx-2"></i>Favourites
        </Link>
        <Link to="change-password">
          <i className="bi bi-key mx-2"></i>Change Password
        </Link>
        <Link to="/" onClick={logout}>
          <i className="bi bi-box-arrow-right mx-2"></i>Logout
        </Link>
      </section>
      <section className="profile-content">
        <Outlet />
      </section>
    </div>
  );
}

export default Profile;
