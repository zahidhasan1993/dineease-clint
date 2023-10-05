import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../customhooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const item = useLoaderData();
  const myAxios = useAxiosSecure();
  const { price, name, _id } = item;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const updateName = data.name;
    const updatePrice = data.price;
    const updatedDoc = {
      name: updateName,
      price: parseFloat(updatePrice),
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00008B",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Delete this item`,
    }).then((result) => {
      if (result.isConfirmed) {
        myAxios.patch(`/menu/${_id}`, updatedDoc).then((res) => {
            if (res.data.deletedCount > 0) {
                Swal.fire("Item Deleted");
                
              }
        });
      }
    });
  };
  // console.log(name,price);
  return (
    <div>
      <h1 className="text-5xl">
        Update this <span className="text-red-700">Item</span>
      </h1>
      <div className="mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <label htmlFor="name">Recipe Name*</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Recipe Name"
              className="py-3 pl-5 rounded-lg"
              {...register("name", {
                required: "Name Is Required",
                maxLength: {
                  value: 20,
                  message: "Name must be at most 20 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-xl text-red-700">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-5 md:w-full mt-10">
            <label htmlFor="price">Price*</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="price"
              className="py-3 pl-5 rounded-lg"
              {...register("price", { required: "price is required" })}
            />
            {errors.price && (
              <p className="text-xl text-red-700">{errors.price.message}</p>
            )}
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              className="py-3 px-10 bg-red-700 text-white rounded-lg hover:bg-red-500 hover:scale-125 hover:font-bold duration-300"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
