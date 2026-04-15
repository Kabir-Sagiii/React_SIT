import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../../pages/sign-in/Signin";
import Signup from "../../pages/sign-up/Signup";
import InitialHome from "../../pages/initial-home/InitialHome";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";

function Routing() {
  const routes = [
    {
      path: "/",
      component: <InitialHome />,
    },
    {
      path: "/sign-in",
      component: <Signin />,
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
