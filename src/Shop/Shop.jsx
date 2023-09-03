import img from "../assets/moreimage/masimo-grabar-NzHRSLhc6Cs-unsplash.jpg";
import SectionCover from "../components/shared/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../customhooks/useMenu";
import ShopCard from "./ShopCard";
import "../Shop/style.css";
import { useEffect, useState } from "react";
import useTitle from "../customhooks/useTitle";
import { useParams } from "react-router-dom";

const Shop = () => {
  useTitle("DineEase | Shop");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["pizza","salad","drinks","dessert","soup"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  
  console.log(category);
  const menu = useMenu();
  const pizzas = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soups = menu.filter((item) => item.category === "soup");

//   console.log(pizzas);
  return (
    <div>
      <SectionCover img={img} name="Order From Here"></SectionCover>
      <Tabs defaultIndex={currentIndex} onSelect={(index) => setCurrentIndex(index)} className="my-20">
        <TabList className="text-center md:text-xl text-red-700 border-none">
          <Tab id="pizzaTab">Pizza</Tab>
          <Tab id="saladTab">Salad</Tab>
          <Tab id="drinksTab">Drinks</Tab>
          <Tab id="dessertTab">Dessert</Tab>
          <Tab id="soupTab">Soup</Tab>
        </TabList>

        <TabPanel className="mt-20">
          <div className="md:grid md:grid-cols-3">
            {pizzas.map((pizza) => (
              <ShopCard key={pizza._id} item={pizza}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div className="md:grid md:grid-cols-3">
            {salads.map((salad) => (
              <ShopCard key={salad._id} item={salad}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div className="md:grid md:grid-cols-3">
            {drinks.map((drink) => (
              <ShopCard key={drink._id} item={drink}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div className="md:grid md:grid-cols-3">
            {desserts.map((dessert) => (
              <ShopCard key={dessert._id} item={dessert}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div className="md:grid md:grid-cols-3">
            {soups.map((soup) => (
              <ShopCard key={soup._id} item={soup}></ShopCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
