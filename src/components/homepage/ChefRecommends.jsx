import { useEffect } from "react";
import img1 from "../../assets/chefrecomend/bruna-branco-t8hTmte4O_g-unsplash.jpg";
import img2 from "../../assets/chefrecomend/cala-w6ftFbPCs9I-unsplash.jpg";
import img3 from "../../assets/chefrecomend/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ChefRecommends = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const foods = [
    {
      name: "American Pizza",
      price: 13,
      img: img3,
      id: 1,
      details:
        "American pizza is a beloved culinary classic, known for its delicious simplicity. Typically characterized by a thin or thick crust, it's generously topped with tomato sauce and melted cheese, often accompanied by a variety of toppings such as pepperoni, mushrooms, onions, and bell peppers.",
    },
    {
      name: "Maxican Pasta",
      price: 8,
      img: img1,
      id: 2,
      details:
        "Mexican pasta is a delightful fusion of Italian and Mexican flavors. It typically features pasta, such as spaghetti or fettuccine, tossed in a rich and savory sauce made with Mexican ingredients. This sauce often includes elements like tomatoes, chili peppers, garlic, onions, and a blend of spices like cumin and chili powder, giving it a spicy and robust flavor profile. ",
    },
    {
      name: "Chefs special soup",
      price: 18,
      img: img2,
      id: 3,
      details:
        "Clear soup is a light and transparent broth-based soup that's both simple and comforting. It's typically made by simmering meat, poultry, seafood, or vegetables in water or a clear stock, allowing their flavors to infuse the liquid. The soup is often strained to remove any solids, resulting in a clear and flavorful broth. Common ingredients in clear soups include carrots, celery, onions, and sometimes rice or noodles. ",
    },
  ];
  return (
    <div className="md:grid md:grid-cols-3">
      {foods.map((food) => (
        <div
          key={food.id}
          className="mb-4 p-0 sm:p-4 md:w-full"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          {" "}
          <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
            <img
              className="lg:h-96 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
              src={food.img}
              alt="food image"
            />

            <h2 className="pt-4 pb-1 px-6 inline-block text-sm title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
              FOOD &#128525; &#127798; &#127839;
            </h2>

            <div className="py-1 px-6">
              <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
                {food.name}
              </h1>

              <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
                {food.details}
              </p>
            </div>

            <div className="pt-1 pb-4 px-6">
              <Link to="/menu">
                <button className="py-3 px-5 text-white font-semibold rounded bg-red-500 hover:scale-110 duration-300 ease-in-out">
                  Check Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefRecommends;
