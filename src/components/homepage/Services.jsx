import {
  FaCanadianMapleLeaf,
  FaAirbnb,
  FaAngellist,
  FaBiking,
} from "react-icons/fa";
import img1 from "../../assets/banner/5.jpg";
const Services = () => {
  
  return (
    <div className="relative mx-auto p-20 w-full max-w-[86rem] bg-black text-white">
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-shrink-0 mx-auto mb-10 px-4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white text-opacity-80 font-rubik tracking-wider space-y-3">
            <span className="block">
              Get <b className="text-red-700">Delicias</b> Food
            </span>
            <span className="block">
              for your <b className="text-red-700">Stomach</b>
            </span>
          </h2>

          <span className="mt-5 mx-auto lg:mx-0 w-32 h-1.5 block rounded-3xl bg-white" />
        </div>

        <dl className="flex-grow-0 px-4 grid grid-cols-4 gap-4">
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 sm:border-blue-300 lg:border-gray-100 bg-black bg-opacity-80 text-center">
            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 sm:bg-blue-300 lg:bg-gray-100">
              <FaCanadianMapleLeaf className="w-10 h-10 text-blue-300 sm:text-white lg:text-blue-300" />
            </span>

            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
              Top Chefs
            </dt>

            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
              We have top chefs in the country to deliver you the high quality
              foods.
            </dd>
          </div>

          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 sm:border-gray-100 lg:border-blue-300 bg-black bg-opacity-80 text-center">
            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 sm:bg-gray-100 lg:bg-blue-300">
              <FaAirbnb className="w-10 h-10 text-white sm:text-blue-300 lg:text-white" />
            </span>

            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
              Large Menu
            </dt>

            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
              We have a large number of items to serve you. We have many
              categories like soups,pizza,burger ETC.
            </dd>
          </div>

          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 md:border-blue-300 bg-black bg-opacity-80 text-center">
            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 md:bg-blue-300">
              <FaAngellist className="w-10 h-10 text-blue-300 md:text-white" />
            </span>

            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
              Budget friendly
            </dt>

            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
              We focus on good and tasty food with a minimum price so that our
              customers can enjoy our food without looking at his wallet
            </dd>
          </div>

          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
              <FaBiking className="w-10 h-10 text-white md:text-blue-300" />
            </span>

            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
              Home Delivery
            </dt>

            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
              We provide home delivery 24/7
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Services;
