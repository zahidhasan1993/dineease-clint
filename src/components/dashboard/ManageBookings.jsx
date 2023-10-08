import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://dineease-server-lemon.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [bookings]);
  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00008B",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes! Approved',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dineease-server-lemon.vercel.app/bookings/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Yaah!", 'Reservation Approved!', "success");
              
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl">
        Manage <span className="text-red-700">Bookings</span>
      </h1>
      <div>
        <div className="md:flex justify-between">
          <h1 className="text-4xl font-medium mb-5 md:mb-0 mt-20">
            Total Items : {bookings.length}
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
                    Name
                  </th>

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
                    Date
                  </th>

                  {/* ::Actions */}
                  <th
                    className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Time
                  </th>
                  <th
                    className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Approved
                  </th>
                </tr>
              </thead>

              {/* :TABLE BODY */}
              <tbody className="">
                {bookings.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    } whitespace-nowrap`}
                  >
                    <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                      {item.name}
                    </td>

                    <td className="py-3 px-4 text-base text-gray-500 font-medium">
                      {item.email}
                    </td>
                    <td className="py-3 px-4 text-base text-gray-500 font-medium">
                      {item.date}
                    </td>

                    <td className="py-3 px-4 text-base text-gray-500 font-medium">
                      {item.time}
                    </td>

                    <td className="py-3 px-4 text-base text-gray-700 text-center font-medium">
                      {
                        item?.status === 'approved' ? <p className="text-blue-700">Booking Approved</p> : <button onClick={() => handleApprove(item._id)} className="text-sm text-red-500 font-semibold hover:text-red-600">
                        Approve
                      </button>
                      }
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

export default ManageBookings;
