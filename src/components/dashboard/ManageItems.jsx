import Swal from "sweetalert2";
import useAxiosSecure from "../../customhooks/useAxiosSecure";
import useMenu from "../../customhooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menu, refetch } = useMenu();
  const myAxios = useAxiosSecure();

  const handleDelete = (item) => {
    // console.log(item);
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
        myAxios.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Item Deleted");
            refetch();
          }
          console.log(res.data);
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl">
        Manage <span className="text-red-700">Items</span>
      </h1>
      <div>
        <div className="md:flex justify-between">
          <h1 className="text-4xl font-medium mb-5 md:mb-0 mt-20">
            Total Items : {menu.length}
          </h1>
        </div>
        <div className="mt-20">
          <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
              {/* :TABLE HEAD */}
              <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                <tr>
                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Image
                  </th>

                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Name
                  </th>
                  {/* ::Email */}
                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    price
                  </th>

                  {/* ::Actions */}
                  <th
                    className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Update Item
                  </th>
                  <th
                    className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Delete Item
                  </th>
                </tr>
              </thead>

              {/* :TABLE BODY */}
              <tbody className="">
                {menu.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    } whitespace-nowrap`}
                  >
                    <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                      <img src={item.image} className="w-10" alt="" />
                    </td>

                    <td className="py-3 px-4 text-base text-gray-500 font-medium">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-base text-gray-500 font-medium">
                      {item.price}
                    </td>

                    <td className="py-3 px-4 text-base text-gray-500 font-medium">
                      <Link to={`/dashboard/updateItem/${item._id}`} className="text-sm text-red-500 font-semibold hover:text-red-600">
                        Update
                      </Link>
                    </td>

                    <td className="py-3 px-4 text-base text-gray-700 text-center font-medium">
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
    </div>
  );
};

export default ManageItems;
