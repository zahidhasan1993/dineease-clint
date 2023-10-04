import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
};

  return (
    <div>
      <h1 className="text-5xl">
        Add a new <span className="text-red-700">Item</span>
      </h1>
      <div className="mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <label htmlFor="name">Recipe Name*</label>
            <input
              type="text"
              name="name"
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
          <div className="md:flex md:justify-between md:gap-5 mt-10">
            <div className="flex flex-col gap-5 md:w-full">
              <label htmlFor="category">Category*</label>
              <select
                name="category"
                className="py-3 px-2 bg-white"
                {...register("category", { required: "category is required" })}
              >
                <option>pizza</option>
                <option>salad</option>
                <option>drinks</option>
                <option>dessert</option>
                <option>soup</option>
              </select>
              {errors.category && (
                <p className="text-xl text-red-700">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-5 md:w-full mt-10 md:mt-0">
              <label htmlFor="price">Price*</label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="py-3 pl-5 rounded-lg"
                {...register("price", { required: "price is required" })}
              />
              {errors.price && (
                <p className="text-xl text-red-700">{errors.price.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 md:w-full mt-10">
            <label htmlFor="recipe">Recipe Details*</label>
            <textarea
              name="recipe"
              cols="30"
              rows="10"
              className="resize-none bg-white"
              {...register("recipe", { required: "details is required" })}
            ></textarea>
            {errors.recipe && (
              <p className="text-xl text-red-700">{errors.recipe.message}</p>
            )}
          </div>
          <div className="border border-dashed border-gray-500 relative mt-10">
            <input
              type="file"
              className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
              {...register("image", { required: "image is required" })}
            />
            <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
              <h4>
                Drop image anywhere to upload
                <br />
                or
              </h4>
              <p className="">Select Files</p>
            </div>
            {errors.image && (
              <p className="text-xl text-red-700">{errors.image.message}</p>
            )}
          </div>
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="py-3 px-10 bg-red-700 text-white rounded-lg hover:bg-red-500 hover:scale-125 hover:font-bold duration-300"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
