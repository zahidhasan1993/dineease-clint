import { useContext } from "react";
import { DataProvider } from "../../providers/AuthProvider";
import useMenu from "../../customhooks/useMenu";
import { PiForkKnifeBold } from "react-icons/pi";
const AdminHome = () => {
  const { user } = useContext(DataProvider);
  const menu = useMenu();
  // console.log(user);
  return (
    <div>
      <h1 className="text-5xl">
        Hi welcome back <span className="text-red-700">{user.displayName}</span>{" "}
        !
      </h1>
      <div className="mt-10">
        <div className="text-white bg-gradient-to-r from-red-700 to-pink-500 w-72 rounded-lg h-36 p-8 flex justify-center items-center gap-5">
          <PiForkKnifeBold className="text-4xl"></PiForkKnifeBold>
          <div className="text-2xl font-semibold">
            <h1>{menu.length}</h1>
            <p>Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
