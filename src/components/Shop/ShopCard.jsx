import { useContext } from "react";
import { DataProvider } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../customhooks/useCart";

const ShopCard = ({ item }) => {
  const {name,_id,image,price} = item;
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useContext(DataProvider);
  const {refetch} = useCart();
  const handleAddToCart = () => {
    if (user && user.email) {
      const data = {
        itemId : _id,
        name,
        image,
        price,
        userEmail : user.email
      }

      fetch('http://localhost:5000/carts',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            text: 'Added to cart',
          })
          refetch();
        }
      })

    }
    else{
      Swal.fire({
        title: 'Please login to order',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
  }
  return (
    <div className="mb-4 p-0 sm:p-4 md:w-full">
      {" "}
      <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
        <img
          className="lg:h-96 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
          src={item.image}
          alt="blog"
        />

        <h2 className="pt-4 pb-1 px-6 inline-block text-sm title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
          item &#128525; &#127798; &#127839;
        </h2>

        <div className="py-1 px-6">
          <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
            {item.name}
          </h1>

          <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
            {item.recipe}
          </p>
          <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-red-700 cursor-pointer font-bold">
               Price: ${item.price}
          </p>
        </div>

        <div className="pt-1 pb-4 px-6">
          <button onClick={handleAddToCart} className="py-3 px-5 text-white font-semibold rounded bg-red-500 hover:scale-110 duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
