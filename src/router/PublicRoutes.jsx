import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/extra/ErrorPage";
import Home from "../components/homepage/Home";
import Menu from "../components/menupage/Menu";
import About from "../components/about/About";
import Contact from "../components/about/Contact";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import PrivateRoute from "./PrivateRoute";
import Shop from "../components/Shop/Shop";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../components/dashboard/AdminHome";
import ManageItems from "../components/dashboard/ManageItems";
import UserHome from "../components/dashboard/UserHome";
import UserReservation from "../components/dashboard/UserReservation";
import UserCart from "../components/dashboard/UserCart";


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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'adminhome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'manageitems',
        element: <ManageItems></ManageItems>
      },

      //user dashboard routes
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'reservation',
        element: <UserReservation></UserReservation>
      },
      {
        path: 'mycart',
        element: <UserCart></UserCart>
      }
    ]
  },
]);
