import { createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
