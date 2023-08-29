import SectionTitle from "../shared/SectionTitle";
import Banner from "./Banner";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-20">
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
    </div>
  );
};

export default Home;
