import { createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Reducer from "./components/Reducer";
import ProductAdmin from "./components/ProductAdmin";

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
      {
        path: "reducer",
        element: <Reducer />,
      },

      {
        path: "admin/products",
        element: <ProductAdmin />,
      },
    ],
  },
]);

export default routes;
