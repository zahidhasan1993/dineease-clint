import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../customhooks/useAxiosSecure";

const AllUser = () => {

  const myAxios = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await myAxios("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    // console.log(user._id);
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
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00008B",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${user.name} Admin`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.acknowledged) {
              Swal.fire("Yaah!", `${user.name} is now admin`, "success");
              refetch();
            }
          });
      }
    });
  };
  // console.log(users);

  return (
    <div>
      <div className="md:flex justify-between">
        <h1 className="text-4xl font-medium mb-5 md:mb-0">
          Total User : {users.length}
        </h1>
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
                  Name
                </th>
                {/* ::Job Title */}
                <th
                  className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                  scope="col"
                >
                  Email
                </th>
                {/* ::Email */}
                <th
                  className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                  scope="col"
                >
                  Role
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
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } whitespace-nowrap`}
                >
                  {/* ::User Name */}
                  <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                    {user.name}
                  </td>
                  {/* ::User Job Title */}
                  <td className="py-3 px-4 text-base text-gray-500 font-medium">
                    {user.email}
                  </td>
                  {/* ::User Email */}
                  <td className="py-3 px-4 text-base text-gray-500 font-medium">
                    {user.role === "admin" ? (
                      <p>Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-sm text-red-500 font-semibold hover:text-red-600"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>

                  {/* ::Action Buttons */}
                  <td className="py-3 px-4 text-base text-gray-700 text-center font-medium">
                    {/* :::delete button */}
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="text-sm text-red-500 font-semibold hover:text-red-600"
                    >
                      Delete User
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

export default AllUser;
