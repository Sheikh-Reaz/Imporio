import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/Home/Home";
import AllProduct from "../components/pages/AllProducts/AllProduct";
import ExportProduct from "../components/pages/ExportProduct/ExportProduct";
import MyExport from "../components/pages/MyExport/MyExport";
import MyImport from "../components/pages/MyImport/MyImport";
import ProductDetails from "../components/pages/ProductDetails/ProductDetails";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Profile from "../components/pages/Profile/Profile";
import Contact  from "../components/pages/Contact/Contact";
import Delivery  from "../components/pages/Delivery/Delivery";
import PrivateRoute from "../routes/PrivateRoute";
import { axiosInstance } from "../hooks/useAxios";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProduct />,
      },
      {
        path: "export",
        element: <ExportProduct />,
      },
      {
        path: "myExport",
        element: <MyExport />,
      },
      {
        path: "myImport",
        element: <MyImport />,
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
        path: "profile",
        element:<Profile />  ,
      },
      {
        path: "contacts",
        element:<Contact/>  ,
      },
      {
        path: "delivery-return",
        element:<Delivery/>  ,
      },
      {
        path: 'productDetails/:id' ,
        
        element:   <ProductDetails/>  ,
        loader: async ({ params }) => {
     
      const res = await axiosInstance.get(`/productDetails/${params.id}`);
      return res.data;
    },
      },
      {
        path: "/*",
        element: <h1>This Page is not ready please visit a valid page</h1>,
      },
    ],
  },
]);
export default router;
