import { createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Reducer from "./components/Reducer";
import ProductAdmin from "./components/ProductAdmin";
import PropsExample from "./components/PropsExample";
import S from "./components/propdrilling/S";
import A from "./components/context/A";
import M from "./components/M";
import ProductDetail from "./components/ProductDetail";

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
      {
        path: "props",
        element: <PropsExample />,
      },
      {
        path: "prop-drilling",
        element: <S />,
      },
      {
        path: "context-example",
        element: <A />,
      },
      {
        path:'optimization-examples',
        element:<M/>
      },
      {
        path:'/products/detail/:id',
        element:<ProductDetail/>
      }
    ],
  },
]);

export default routes;
