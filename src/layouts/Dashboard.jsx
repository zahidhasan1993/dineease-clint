import { useEffect, useState } from "react";
import {
  FaBars,
  FaBook,
  FaHome,
  FaList,
  FaMailBulk,
  FaShoppingBag,
  FaShoppingBasket,
  FaUsers,
} from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../customhooks/useCart";
import useTitle from "../customhooks/useTitle";
import useAdmin from "../customhooks/useAdmin";

const Dashboard = () => {
  const {isAdmin} = useAdmin();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isSidebarHidden, setSidebarHidden] = useState(true);

  const { cart } = useCart();

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };
  useTitle("DineEase | DashBoard");

  return (
    <div className="bg-gray-200 md:min-h-screen lg:flex md:mt-5">
      <nav className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center px-9">
          {/* Menu Icon */}
          <button
            id="menu-button"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <FaBars></FaBars>
          </button>
          {/* Logo */}
          <div className="ml-1 h-20 items-center ">
            <h1 className="pt-6 text-2xl">
              Dine<span className="text-red-700">Ease</span>
            </h1>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`lg:block ${
          isSidebarHidden ? "hidden" : ""
        } bg-white w-64 h-screen fixed rounded-none border-none`}
      >
        {/* Sidebar Items */}
        <div className="p-4 space-y-4">
          {isAdmin ? (
            <>
              <NavLink
                to="adminhome"
                aria-label="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaHome></FaHome>
                <span className="-mr-1 font-medium">Admin Home</span>
              </NavLink>

              <NavLink
                to="additem"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <PiForkKnifeBold></PiForkKnifeBold>
                <span>Add Items</span>
              </NavLink>

              <NavLink
                to="manageitems"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaList></FaList>
                <span>Manage Items</span>
              </NavLink>

              <NavLink
                to="managebookings"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaBook></FaBook>
                <span>Manage Bookings</span>
              </NavLink>

              <NavLink
                to="alluser"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaUsers></FaUsers>
                <span>All Users</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="userhome"
                aria-label="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaHome></FaHome>
                <span className="-mr-1 font-medium">User Home</span>
              </NavLink>

              <NavLink
                to="bookTable"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <PiForkKnifeBold></PiForkKnifeBold>
                <span>Reservation</span>
              </NavLink>

              <NavLink
                to="mycart"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaShoppingBag></FaShoppingBag>
                <span>
                  My Cart{" "}
                  <sup className="text-[15px] font-bold">{cart.length}</sup>
                </span>
              </NavLink>

              <NavLink
                to="addreview"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaBook></FaBook>
                <span>Add Review</span>
              </NavLink>

              <NavLink
                to="mybookings"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                    : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
                }
              >
                <FaShoppingBasket></FaShoppingBasket>
                <span>My Booking</span>
              </NavLink>
            </>
          )}

          <hr />
          <Link
            to="/"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <FaHome></FaHome>
            <span>Home</span>
          </Link>
          {/* Logout Link */}
          <Link
            to="/menu"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <FaList></FaList>
            <span>Menu</span>
          </Link>
          <Link
            to="/shop/pizza"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <FaShoppingBag></FaShoppingBag>
            <span>Shop</span>
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <FaMailBulk></FaMailBulk>
            <span>Contact</span>
          </Link>
        </div>
      </div>
      {/* Main Container */}
      <div className="lg:w-full lg:ml-44 lg:mr-10 px-6 py-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
