import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";

const ClintReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-[80%] h-[30rem] mb-20"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="bg-white h-full flex items-center justify-center">
            <div className="text-center p-5">
              <div className="text-5xl md:text-9xl text-blue-300 leading-7">”</div>
              <div className="font-medium text-gray-600 max-w-xl text-lg md:text-3xl">
                {review.details}
              </div>
              <div className="mt-5">
                <span className="font-bold text-sm md:text-xl">{review.name}</span>
                <span className="mx-3">--------</span>
                <Rating
                  initialRating={review.rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  fullSymbol={<FaStar></FaStar>}
                  className="text-yellow-700 text-xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClintReview;
