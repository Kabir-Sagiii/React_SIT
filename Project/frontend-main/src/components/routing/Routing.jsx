import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../../pages/sign-in/Signin";
import Signup from "../../pages/sign-up/Signup";
import InitialHome from "../../pages/initial-home/InitialHome";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";
import Home from "../../pages/home/Home.jsx";
import Products from "../../pages/products/Products.jsx";

function Routing({ login }) {
  const routes = [
    {
      path: "/",
      component: <InitialHome />,
    },
    {
      path: "/home",
      component: <Home />,
    },
    {
      path: "/products",
      component: <Products />,
    },
    {
      path: "/sign-in",
      component: <Signin login={login} />,
    },
    { path: "/sign-up", component: <Signup /> },
    { path: "/forgot-password", component: <ForgotPassword /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
    </Routes>
  );
}

export default Routing;
