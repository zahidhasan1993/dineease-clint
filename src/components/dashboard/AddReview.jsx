import { useForm } from "react-hook-form";
import useAuth from "../../customhooks/useAuth";
import Swal from "sweetalert2";

const AddReview = () => {
  const { register, handleSubmit,reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    const review = {
      name: data.name,
      details: data.details,
      rating: data.rating,
    };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book My Table",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire("BOOKED!", "Your table has been booked.", "success");
              reset();
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl">
        Share Your experience about Dine
        <span className="text-red-700 underline">Ease</span>
      </h1>
      <div className="mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating*
            </label>
            <input
              type="text"
              name="rating"
              className="border rounded w-full py-2 px-3"
              placeholder="highest rating is 5"
              {...register("rating", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name*
            </label>
            <input
              type="text"
              name="name"
              className="border rounded w-full py-2 px-3"
              defaultValue={user.displayName}
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Details*
            </label>
            <textarea
              name="recipe"
              cols="30"
              rows="10"
              className="resize-none bg-white w-full"
              {...register("details", { required: true })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
