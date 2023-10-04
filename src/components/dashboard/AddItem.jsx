const AddItem = () => {
  return (
    <div>
      <h1 className="text-5xl">
        Add a new <span className="text-red-700">Item</span>
      </h1>
      <div className="mt-20">
        <form>
          <div className="flex flex-col gap-5">
            <label htmlFor="itemName">Recipe Name*</label>
            <input
              type="text"
              name="itemName"
              id=""
              placeholder="Recipe Name"
              className="py-3 pl-5 rounded-lg"
            />
          </div>
          <div className="md:flex md:justify-between md:gap-5 mt-10">
            <div className="flex flex-col gap-5 md:w-full">
              <label htmlFor="category">Category*</label>
              <select name="category" id="" className="py-3 px-2 bg-white">
                <option>Pizza</option>
                <option>Salad</option>
                <option>Drinks</option>
                <option>Dessert</option>
                <option>Soup</option>
              </select>
            </div>
            <div className="flex flex-col gap-5 md:w-full mt-10 md:mt-0">
              <label htmlFor="price">Price*</label>
              <input
                type="text"
                name="price"
                id=""
                placeholder="price"
                className="py-3 pl-5 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:w-full mt-10">
            <label htmlFor="details">Recipe Details*</label>
            <textarea
              name="details"
              cols="30"
              rows="10"
              className="resize-none bg-white"
            ></textarea>
          </div>

          <div className="mt-10 text-center">
            <button className="py-3 px-10 bg-red-700 text-white rounded-lg hover:bg-red-500 hover:scale-125 hover:font-bold duration-300">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
