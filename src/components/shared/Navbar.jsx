import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataProvider } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../customhooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { user, logOut } = useContext(DataProvider);
  const { cart } = useCart();
  console.log(cart);
  const handleMouseHover = () => {
    setIsHover(!isHover);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <NavLink to="/" className="mr-8 hover:text-gray-300">
        Home
      </NavLink>
      <NavLink to="/menu" className="mr-8 hover:text-gray-300">
        Menu
      </NavLink>
      <NavLink to="/shop/pizza" className="mr-8 hover:text-gray-300">
        Shop
      </NavLink>
      <NavLink to="/about" className="mr-8 hover:text-gray-300">
        About
      </NavLink>
      <NavLink to="/contact" className="mr-8 hover:text-gray-300">
        Contact
      </NavLink>
      {user ? (
        <NavLink to="/dashboard" className="mr-8 hover:text-gray-300">
          Dashboard
        </NavLink>
      ) : (
        <></>
      )}
    </>
  );
  // console.log(user);
  return (
    <header className="w-full fixed z-10 container mx-auto bg-black bg-opacity-30 text-gray-100 body-font mb-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-5 px-5">
        <a
          href="#link"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <span className="ml-3 text-2xl text-gray-100 font-semibold antialiased">
            Dine<span className="text-red-700">Ease</span>
          </span>
        </a>
        {/* Navbar */}
        <div className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          {links}
        </div>
        {/* Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          {user ? (
            <div className="flex gap-5 justify-center items-center">
              <div className="flex gap-1">
                <Link to='dashboard/mycart'>
                  <FaShoppingCart className="text-2xl"></FaShoppingCart>
                </Link>
                <sub className="font-semibold text-[15px]">
                  {cart.length || 0}
                </sub>
              </div>
              {isHover && <p className="font-semibold ">{user.displayName}</p>}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseHover}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-700 hover:bg-red-500 hover:scale-105 duration-300 rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-red-700 hover:bg-red-500 hover:scale-105 duration-300 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
          {links}
          <div className="mt-5 mr-5 cursor-pointer">
            {user ? (
              <div
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseHover}
                className="flex gap-5 justify-center items-center"
              >
                <div className="flex gap-1">
                  <FaShoppingCart className="text-2xl"></FaShoppingCart>
                  <sub className="font-semibold">{cart.length || 0}</sub>
                </div>

                {isHover && (
                  <p className="font-semibold ">{user.displayName}</p>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 bg-red-700 hover:bg-red-500 hover:scale-105 duration-300 rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-red-700 hover:bg-red-500 hover:scale-105 duration-300 rounded-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
