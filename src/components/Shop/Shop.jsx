import img from "../../assets/moreimage/masimo-grabar-NzHRSLhc6Cs-unsplash.jpg";
import SectionCover from "../shared/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../customhooks/useMenu";
import ShopCard from "./ShopCard";
import "./style.css";
import { useEffect, useState } from "react";
import useTitle from "../../customhooks/useTitle";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {
  useTitle("DineEase | Shop");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const categories = ["pizza", "salad", "drinks", "dessert", "soup", "offer"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // console.log(category);
  const {menu} = useMenu();
  const pizzas = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soups = menu.filter((item) => item.category === "soup");
  const offers = menu.filter((item) => item.category === "offered");

  // console.log(offers);
  return (
    <div>
      <SectionCover img={img} name="Order From Here"></SectionCover>
      <Tabs
        defaultIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
        className="my-20"
      >
        <TabList className="text-center md:text-xl text-red-700 border-none">
          <Tab id="pizzaTab">Pizza</Tab>
          <Tab id="saladTab">Salad</Tab>
          <Tab id="drinksTab">Drinks</Tab>
          <Tab id="dessertTab">Dessert</Tab>
          <Tab id="soupTab">Soup</Tab>
          <Tab id="offeredTab">Offer</Tab>
          <Tab id="allTab">All Foods</Tab>

        </TabList>

        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {pizzas.map((pizza) => (
              <ShopCard key={pizza._id} item={pizza}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {salads.map((salad) => (
              <ShopCard key={salad._id} item={salad}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {drinks.map((drink) => (
              <ShopCard key={drink._id} item={drink}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {desserts.map((dessert) => (
              <ShopCard key={dessert._id} item={dessert}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {soups.map((soup) => (
              <ShopCard key={soup._id} item={soup}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {offers.map((offer) => (
              <ShopCard key={offer._id} item={offer}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-20">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:grid md:grid-cols-3"
          >
            {menu.map((item) => (
              <ShopCard key={item._id} item={item}></ShopCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
