import useAuth from "../../customhooks/useAuth";
import useMenu from "../../customhooks/useMenu";
import { PiForkKnifeBold } from "react-icons/pi";
import {
  FaPhoneAlt,
  FaRegCalendarCheck,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import useCart from "../../customhooks/useCart";
import { useEffect, useState } from "react";

const UserHome = () => {
  const { user } = useAuth();
  const { menu } = useMenu();
  const { cart } = useCart();
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://dineease-server-lemon.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://dineease-server-lemon.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const myReviews = reviews.filter(
    (review) => user.displayName === review.name
  );
  const myBookings = bookings.filter((booking) => user.email === booking.email);
  //   console.log(myBookings.length);
  return (
    <div>
      <h1 className="text-5xl">
        Welcome back <span className="text-red-700">{user.displayName}</span>
      </h1>
      <div className="mt-20 md:flex md:gap-10">
        <div className="text-white bg-gradient-to-r from-red-700 to-pink-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5 mb-5 md:mb-0">
          <PiForkKnifeBold className="text-5xl"></PiForkKnifeBold>
          <div className="text-2xl font-semibold">
            <h1>{menu.length}</h1>
            <p>Items</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-violet-700 to-blue-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5 mb-5 md:mb-0">
          <FaShoppingBag className="text-5xl"></FaShoppingBag>
          <div className="text-2xl font-semibold">
            <h1>13</h1>
            <p>Shops</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-orange-700 to-amber-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5 mb-5 md:mb-0">
          <FaPhoneAlt className="text-5xl"></FaPhoneAlt>
          <div className="text-2xl font-semibold">
            <h1>2</h1>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full bg-gray-300">
        <h1 className="text-3xl pt-5 pl-10 text-red-700">Your Activities:</h1>
        <div className="py-5 pl-10">
          <div className="flex items-center gap-2 text-xl mb-2">
            <FaShoppingBag></FaShoppingBag>
            <p>Orders : {cart.length}</p>
          </div>
          <div className="flex items-center gap-2 text-xl mb-2">
            <FaStar></FaStar>
            <p>Reviews : {myReviews.length}</p>
          </div>
          <div className="flex items-center gap-2 text-xl mb-2">
            <FaRegCalendarCheck></FaRegCalendarCheck>
            <p>Bookings : {myBookings.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
