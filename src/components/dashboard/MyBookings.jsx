import { useEffect, useState } from "react";
import useAuth from "../../customhooks/useAuth";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://dineease-server-lemon.vercel.app/booking/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user.email,bookings]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: `Are you sure? ${user.displayName}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Booking!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your booking has canceled.", "success");
            }
          });
      }
    });
  };
  //   console.log(bookings);
  return (
    <div>
      <h1 className="text-5xl">
        See all of your bookings{" "}
        <span className="text-red-700 underline">{user.displayName}</span>
      </h1>
      <div className="mt-20">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Name
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Date
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Time
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Action
              </th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <tbody key={booking._id} className="block md:table-row-group">
              <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  {booking.name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email
                  </span>
                  {booking.email}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Date:
                  </span>
                  {booking.date}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Time
                  </span>
                  {booking.time}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>

                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {/* Repeat the above <tr> block for each row of data */}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
