import Swal from "sweetalert2";
import useCart from "../../customhooks/useCart";
import useTitle from "../../customhooks/useTitle";
import { Link } from "react-router-dom";

const UserCart = () => {
  useTitle("Dashboard | Cart");
  const { cart, refetch } = useCart();
  const totalPrice = cart.reduce(
    (a, currentValue) => a + currentValue.price,
    0
  );

  const newTotalPrice = parseFloat(totalPrice).toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00008B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Item is removed!!!", "success");
              refetch();
            }
          });
      }
    });
  };
  // console.log(totalPrice);
  return (
    <div>
      <div className="md:flex justify-between">
        <h1 className="text-4xl font-medium mb-5 md:mb-0">
          Total Item : {cart.length}
        </h1>
        <h1 className="text-4xl font-medium">Total price : ${newTotalPrice}</h1>
        <Link to="/dashboard/payment" className="py-3 px-7 mt-5 md:mt-0 text-white font-bold bg-red-700 rounded-lg hover:bg-red-500 hover:scale-125 duration-300">
          Pay
        </Link>
      </div>
      <div className="mt-20">
        <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
          <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
            {/* :TABLE HEAD */}
            <thead className="min-w-full bg-gray-100 text-left text-gray-700">
              <tr>
                {/* ::Name */}
                <th
                  className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                  scope="col"
                >
                  Item Image
                </th>
                {/* ::Job Title */}
                <th
                  className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                  scope="col"
                >
                  Item Name
                </th>
                {/* ::Email */}
                <th
                  className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                  scope="col"
                >
                  Price
                </th>

                {/* ::Actions */}
                <th
                  className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
                  scope="col"
                >
                  Actions
                </th>
              </tr>
            </thead>

            {/* :TABLE BODY */}
            <tbody className="">
              {cart.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } whitespace-nowrap`}
                >
                  {/* ::User Name */}
                  <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                    <img src={item.image} alt="food image" className="h-20" />
                  </td>
                  {/* ::User Job Title */}
                  <td className="py-3 px-4 text-base text-gray-500 font-medium">
                    {item.name}
                  </td>
                  {/* ::User Email */}
                  <td className="py-3 px-4 text-base text-gray-500 font-medium">
                    ${item.price}
                  </td>

                  {/* ::Action Buttons */}
                  <td className="py-3 px-4 text-base text-gray-700 text-center font-medium">
                    {/* :::delete button */}
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-sm text-red-500 font-semibold hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
