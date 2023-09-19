import { useEffect } from "react";
import useTitle from "../../customhooks/useTitle";
import SectionTitle from "../shared/SectionTitle";
import Banner from "./Banner";
import CallUs from "./CallUs";
import ChefRecommends from "./ChefRecommends";
import ClintReview from "./ClintReview";
import FeaturedItem from "./FeaturedItem";
import FromOurMenu from "./FromOurMenu";
import PopularMenu from "./PopularMenu";
import Services from "./Services";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useTitle("DineEase | Home");
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>

      <div className="my-20" data-aos="fade-up" data-aos-duration="1500">
        <Services></Services>
      </div>

      <div className="mb-20" data-aos="fade-down" data-aos-duration="1500">
        <SectionTitle title="Our Popular Menu"></SectionTitle>
        <PopularMenu></PopularMenu>
      </div>

      <div className="mb-20" data-aos="fade-right" data-aos-duration="1500">
        <SectionTitle title="Featured This Week"></SectionTitle>
        <FeaturedItem></FeaturedItem>
      </div>
      <div className="mb-20" data-aos="flip-down" data-aos-duration="1500">
        <CallUs></CallUs>
      </div>
      <div className="mb-20" data-aos="zoom-out-right" data-aos-duration="1500">
        <SectionTitle title="Our Chefs Recommends"></SectionTitle>
        <ChefRecommends></ChefRecommends>
      </div>
      <div className="mb-20">
        <FromOurMenu></FromOurMenu>
      </div>
      <div className="mb-20" data-aos="zoom-out" data-aos-duration="1500">
        <SectionTitle title="What clints Says"></SectionTitle>
        <ClintReview></ClintReview>
      </div>
    </div>
  );
};

export default Home;
