import { useEffect, useState } from "react";
import useMenu from "../../customhooks/useMenu";
import { PiForkKnifeBold } from "react-icons/pi";
import useAuth from "../../customhooks/useAuth";
import useAxiosSecure from "../../customhooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaRegAddressBook, FaUserAlt } from "react-icons/fa";
const AdminHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const { menu } = useMenu();
  // console.log(user);
  const myAxios = useAxiosSecure();

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [bookings]);
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await myAxios("/users");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-5xl">
        Hi welcome back <span className="text-red-700">{user.displayName}</span>{" "}
        !
      </h1>
      <div className="mt-10 md:flex md:gap-10">
        <div className="text-white bg-gradient-to-r from-red-700 to-pink-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <PiForkKnifeBold className="text-4xl"></PiForkKnifeBold>
          <div className="text-2xl font-semibold">
            <h1>{menu.length}</h1>
            <p>Items</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-blue-700 to-violet-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <FaUserAlt className="text-4xl"></FaUserAlt>
          <div className="text-2xl font-semibold">
            <h1>{users.length}</h1>
            <p>User</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-lime-700 to-green-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <FaRegAddressBook className="text-4xl"></FaRegAddressBook>
          <div className="text-2xl font-semibold">
            <h1>{bookings.length}</h1>
            <p>Bookings</p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-32">
        <h1 className="text-5xl">
          <span className="text-red-700  underline">{user.displayName}</span> manage your
          orders and bookings.{" "}
        </h1>
      </div>
    </div>
  );
};

export default AdminHome;
