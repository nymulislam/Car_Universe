import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AddCar from "./components/AddCar/AddCar";
import MyCart from "./components/MyCart/MyCart";
import AuthProvider from "./components/Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import ShowCars from "./components/ShowCars/ShowCars";
import DetailPage from "./components/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addCar",
        element: <PrivetRoute><AddCar></AddCar></PrivetRoute>
      },
      {
        path: "/showCars/:brandName",
        element: <ShowCars></ShowCars>,
        loader: ({params}) => fetch(`http://localhost:5000/cars?brand=${params.brandName}`)
      },
      {
        path: "/detailPage/:id",
        element: <PrivetRoute><DetailPage></DetailPage></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
