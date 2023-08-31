import img from "../../assets/banner/2.jpg";
const FromOurMenu = () => {
  return (
    <div
      className="h-[50rem] bg-cover bg-fixed"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="text-white font-bold text-center pt-64">
        <h1 className="text-8xl underline">Remove Your Hunger</h1>
        <p className="text-2xl ">
          To get discount and enjoy our full menu at your doorstep please join
          us today
        </p>
        <button className="py-3 px-6 bg-red-700 mt-8 rounded-md font-semibold hover:scale-125 duration-300 hover:font-bold hover:bg-red-600">JOIN US</button>
      </div>
    </div>
  );
};

export default FromOurMenu;
