import FoodItems from "../shared/FoodItems";
import useMenu from "../../customhooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const menu = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");

  // console.log(menu);
  return (
    <div className="text-center">
      <div className="md:grid md:grid-cols-2 md:gap-20 mb-32">
        {popularItem.map((item) => (
          <FoodItems key={item._id} item={item}></FoodItems>
        ))}
      </div>
      <Link to="/menu" className="text-xl border-b-red-700 border-b-4 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
        See Full Menu
      </Link>
    </div>
  );
};

export default PopularMenu;
