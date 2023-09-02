
const FoodItems = ({item}) => {
    const {name,image,price,recipe} = item;

    console.log(item);
    return (
        <div className="md:flex md:justify-center md:items-center px-10 pb-8 md:pb-0 md:px-20">
            <img src={image} alt="" className="w-[110px]" style={{borderRadius : "0px 200px 200px 200px"}}/>
            <div className="mt-8 md:mt-0">
                <p className="text-gray-700 text-xl">{name}</p>
                <p className="text-gray-700">{recipe}</p>
            </div>

            <p className="text-xl text-red-700">${price}</p>
        </div>
    );
};

export default FoodItems;