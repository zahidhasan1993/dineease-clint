import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/extra/ErrorPage";
import Home from "../components/homepage/Home";
import Menu from "../components/menupage/Menu";
import About from "../components/about/About";
import Contact from "../components/about/Contact";
import Shop from "../Shop/Shop";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Secret from "../Secret";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
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
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
