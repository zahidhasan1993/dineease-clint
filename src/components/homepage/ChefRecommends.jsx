import img1 from "../../assets/chefrecomend/bruna-branco-t8hTmte4O_g-unsplash.jpg";
import img2 from "../../assets/chefrecomend/cala-w6ftFbPCs9I-unsplash.jpg";
import img3 from "../../assets/chefrecomend/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg";

const ChefRecommends = () => {
  const foods = [
    {
      name: "American Pizza",
      price: 13,
      img: img1,
      id : 1
    },
    {
      name: "Maxican Pasta",
      price: 8,
      img: img2,
      id : 2
    },
    {
      name: "Chefs special soup",
      price: 18,
      img: img3,
      id : 3
    },
  ];
  return <div className="md:grid md:grid-cols-3">
    {
        foods.map(food =>  <div key={food.id} className="mb-4 p-0 sm:p-4 md:w-full">
        {" "}
        
        <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
         
          <img
            className="lg:h-96 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
            src={food.img}
            alt="blog"
          />
  
         
          <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
            My Category
          </h2>
  
          <div className="py-1 px-6">
          
            <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
              Fancy Blog Card 1
            </h1>
           
            <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum
              cum autem incidunt magni voluptatum alias reiciendis possimus
              doloremque, enim consequuntur quia. Voluptas exercitationem soluta
              debitis labore aliquam molestiae illum?
            </p>
          </div>
  
          <div className="pt-1 pb-4 px-6">
                <button className="py-3 px-5 text-white font-semibold rounded bg-red-500 hover:scale-110 duration-300 ease-in-out">Add to cart</button>
          </div>
          
        </div>
      </div>)
    }
  </div>;
};

export default ChefRecommends;
