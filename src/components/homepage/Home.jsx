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

const Home = () => {
  useTitle("DineEase | Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="mb-20 md:my-20">
        <Services></Services>
      </div>
      <div className="mb-20">
        <SectionTitle title="Our Popular Menu"></SectionTitle>
        <PopularMenu></PopularMenu>
      </div>
      <div className="mb-20">
        <SectionTitle title="Featured This Week"></SectionTitle>

        <FeaturedItem></FeaturedItem>
      </div>
      <div className="mb-20">
        <CallUs></CallUs>
      </div>
      <div className="mb-20">
        <SectionTitle title="Our Chefs Recommends"></SectionTitle>
        <ChefRecommends></ChefRecommends>
      </div>
      <div className="mb-20">
        <FromOurMenu></FromOurMenu>
      </div>
      <SectionTitle title="What clink Says"></SectionTitle>
      <ClintReview></ClintReview>
    </div>
  );
};

export default Home;
