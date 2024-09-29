import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import Shoping from "../components/filters/Shoping";
import OurMission from "../pages/OurMission";
import TrendingProducts from "../components/categories/TrendingProducts";
import ProductDetails from "../pages/products/ProductDetails";
import Auth from "../layout/Auth";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";
import PrivateRoute from "../components/shared/PrivateRoute";
import User from "../pages/User";
import CartDetails from "../pages/products/CartDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shoping />,
      },
      {
        path: "mission",
        element: <OurMission />,
      },
      {
        path: "trending",
        element: <TrendingProducts />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "user-profile",
        element: <PrivateRoute element={<User />} />,
      },
      {
        path: "cart-details",
        element: <PrivateRoute element={<CartDetails />} />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
