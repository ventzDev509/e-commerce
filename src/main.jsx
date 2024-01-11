import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RegisterLogin from "./assets/component/RegisterLogin/register.jsx";
import BecomeSeller from "./assets/component/RegisterLogin/becomeSeller.jsx";
import Dashbord from "./assets/component/dashbord/index.jsx";
import EditeProfile from "./assets/component/dashbord/editProfile.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/Categorie",
        element: <></>,
      },
    ],
  },
  {
    path: "/Become-An-Seller",
    element: <BecomeSeller />,
  },
  {
    path: "/Form",
    element: (
      <>
        <RegisterLogin />
      </>
    ),
    children: [
      {
        path: "/Form/Register",
      },
      {
        path: "/Form/Login",
      },
    ],
  },

  // dashbord Lien
  {
    path: "/dashbord",
    element: <Outlet />,
    children: [
      {
        path: "/dashbord/home",
        element: <Dashbord />,
      },
      {
        path: "/dashbord/edite-profile",
        element: <EditeProfile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
