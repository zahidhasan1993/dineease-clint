import { useEffect, useState } from "react";
import FoodItems from "../shared/FoodItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);

  // console.log(menu);
  return (
    <div className="text-center">
      <div className="md:grid md:grid-cols-2 md:gap-20">
        {menu.map((item) => (
          <FoodItems key={item._id} item={item}></FoodItems>
        ))}
      </div>
      <button className="mt-20 text-xl border-b-2 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">See More</button>
    </div>
  );
};

export default PopularMenu;
