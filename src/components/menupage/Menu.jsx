import useTitle from "../../customhooks/useTitle";
import SectionCover from "../shared/SectionCover";
import pizza from "../../assets/menu/pizza.jpg";
import soup from "../../assets/menu/soup.jpg";
import dessert from "../../assets/menu/dessert.jpg";
import salad from "../../assets/menu/salad.jpg";
import FoodItems from "../shared/FoodItems";
import useMenu from "../../customhooks/useMenu";
import offer from "../../assets/menu/offered.jpg"
import { useEffect } from "react";

const Menu = () => {
  useTitle("DineEase | Menu");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuData = useMenu();
  const pizzas = menuData
    .filter((data) => data.category === "pizza")
    .slice(0, 6);
  const soups = menuData.filter((data) => data.category === "soup").slice(0, 6);
  const desserts = menuData
    .filter((data) => data.category === "dessert")
    .slice(0, 6);
  const salads = menuData
    .filter((data) => data.category === "salad")
    .slice(0, 6);
  const offers = menuData.filter(data => data.category === "offered").slice(0,6);
  //   console.log(desserts);
  return (
    <div>
      <div className="text-center">
        <SectionCover img={offer} name="Todays Offer"></SectionCover>
        <div className="my-20 md:grid md:grid-cols-2 md:gap-36">
          {offers.map((of) => (
            <FoodItems key={of._id} item={of}></FoodItems>
          ))}
        </div>
        <button className="mt-5 mb-10 text-xl border-b-2 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
          Order Your Food Now
        </button>
      </div>
      <div className="text-center">
        <SectionCover img={pizza} name="pizza"></SectionCover>
        <div className="my-20 md:grid md:grid-cols-2 md:gap-36">
          {pizzas.map((pz) => (
            <FoodItems key={pz._id} item={pz}></FoodItems>
          ))}
        </div>
        <button className="mt-5 mb-10 text-xl border-b-2 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
          Order Your Food Now
        </button>
      </div>
      <div className="text-center">
        <SectionCover img={soup} name="soup"></SectionCover>
        <div className="my-20 md:grid md:grid-cols-2 md:gap-36">
          {soups.map((sp) => (
            <FoodItems key={sp._id} item={sp}></FoodItems>
          ))}
        </div>
        <button className="mt-5 mb-10 text-xl border-b-2 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
          Order Your Food Now
        </button>
      </div>
      <div className="text-center">
        <SectionCover img={salad} name="salad"></SectionCover>
        <div className="my-20 md:grid md:grid-cols-2 md:gap-36">
          {salads.map((sl) => (
            <FoodItems key={sl._id} item={sl}></FoodItems>
          ))}
        </div>
        <button className="mt-5 mb-10 text-xl border-b-2 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
          Order Your Food Now
        </button>
      </div>
      <div className="text-center">
        <SectionCover img={dessert} name="dessert"></SectionCover>
        <div className="my-20 md:grid md:grid-cols-2 md:gap-36">
          {desserts.map((ds) => (
            <FoodItems key={ds._id} item={ds}></FoodItems>
          ))}
        </div>
        <button className="mt-5 mb-10 text-xl border-b-2 py-5 px-14 text-red-700 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
          Order Your Food Now
        </button>
      </div>
    </div>
  );
};

export default Menu;
