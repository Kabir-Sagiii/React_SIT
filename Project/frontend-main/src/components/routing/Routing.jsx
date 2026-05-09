import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../../pages/sign-in/Signin";
import Signup from "../../pages/sign-up/Signup";
import InitialHome from "../../pages/initial-home/InitialHome";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";
import Home from "../../pages/home/Home.jsx";
import Products from "../../pages/products/Products.jsx";
import Profile from "../../pages/profile/Profile.jsx";
import ChangePassword from "../change-password/ChangePassword";
import Details from "../details/Details";
import Orders from "../orders/Orders";
import Favourites from "../favourites/Favourites";
import Contactus from "../../pages/contactus/Contactus";
import Carts from "../../pages/carts/Carts.jsx";

function Routing({ login, isLoggedIn, logout, setLoggedInUser, loggedInUser }) {
  const routes = [
    {
      path: "/",
      component: <Signin login={login} setLoggedInUser={setLoggedInUser} />,
    },
    {
      path: "/home",
      component: isLoggedIn ? <InitialHome /> : <Navigate to="/" />,
    },
    {
      path: "/products",
      component: isLoggedIn ? (
        <Products loggedInUser={loggedInUser} />
      ) : (
        <Navigate to="/" />
      ),
    },
    {
      path: "/sign-in",
      component: <Signin login={login} setLoggedInUser={setLoggedInUser} />,
    },
    { path: "/sign-up", component: <Signup /> },
    {
      path: "/forgot-password",
      component: isLoggedIn ? <ForgotPassword /> : <Navigate to="/" />,
    },
    {
      path: "/cart",
      component: isLoggedIn ? (
        <Carts loggedInUser={loggedInUser} />
      ) : (
        <Navigate to="/" />
      ),
    },

    {
      path: "/contactus",
      component: isLoggedIn ? <Contactus /> : <Navigate to="/" />,
    },
  ];

  return (
    <Routes>
      {routes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
      <Route
        path="/profile"
        element={isLoggedIn ? <Profile logout={logout} /> : <Navigate to="/" />}
      >
        <Route
          path=""
          element={
            <div className="profile-welcome m-5">
              <h2 className="text-primary">Welcome to your profile</h2>
              <p className="fw-bold">
                Select a section from the left to view personal details, orders,
                favourites, or change your password.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci dicta exercitationem a quae alias magni, excepturi
                aspernatur commodi ipsam iure ea. Nam similique laborum repellat
                dolor, ex facilis veniam dicta vel assumenda expedita voluptates
                provident rem odio sit quibusdam magnam nisi, beatae neque
                mollitia accusamus iste atque, facere nobis architecto.
                Consequatur ad adipisci facere corrupti harum natus assumenda
                nulla, odit laboriosam nisi, recusandae itaque eius debitis
                corporis tenetur mollitia, quisquam hic quibusdam aperiam
              </p>
            </div>
          }
        />
        <Route path="details" element={<Details />} />
        <Route path="orders" element={<Orders />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
}

export default Routing;
