import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
import img5 from "../../assets/banner/5.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        <div className="md:h-[48rem]">
          <img src={img1} className="" />
        </div>
        <div className="md:h-[48rem]">
          <img src={img2} className="" />
        </div>
        <div className="md:h-[48rem]">
          <img src={img3} className="" />
        </div>
        <div className="md:h-[48rem]">
          <img src={img4} className="" />
        </div>
        <div className="md:h-[48rem]">
          <img src={img5} className="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
