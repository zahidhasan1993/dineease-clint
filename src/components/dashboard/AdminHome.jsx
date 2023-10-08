import { PiForkKnifeBold } from "react-icons/pi";
import useAuth from "../../customhooks/useAuth";
import useAxiosSecure from "../../customhooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaMoneyBillAlt, FaRegAddressBook, FaUserAlt } from "react-icons/fa";
import { useEffect } from "react";

const AdminHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const myAxios = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await myAxios("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);

  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-5xl">
        Hi welcome back <span className="text-red-700">{user.displayName}</span>{" "}
        !
      </h1>
      <div className="mt-10 md:grid md:grid-cols-3 md:gap-8">
        <div className="text-white bg-gradient-to-r from-red-700 to-pink-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <PiForkKnifeBold className="text-4xl"></PiForkKnifeBold>
          <div className="text-2xl font-semibold">
            <h1>{stats.items}</h1>
            <p>Items</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-blue-700 to-violet-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <FaUserAlt className="text-4xl"></FaUserAlt>
          <div className="text-2xl font-semibold">
            <h1>{stats.users}</h1>
            <p>User</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-lime-700 to-green-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <FaRegAddressBook className="text-4xl"></FaRegAddressBook>
          <div className="text-2xl font-semibold">
            <h1>{stats.bookings}</h1>
            <p>Bookings</p>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-orange-700 to-amber-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <FaMoneyBillAlt className="text-4xl"></FaMoneyBillAlt>
          <div className="text-2xl font-semibold">
            <h1>${stats.revenue}</h1>
            <p>Revenue</p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-32">
        <h1 className="text-5xl">
          <span className="text-red-700  underline">{user.displayName}</span>{" "}
          manage your orders and bookings.{" "}
        </h1>
      </div>
    </div>
  );
};

export default AdminHome;
