import Swal from "sweetalert2";
import useAuth from "../../customhooks/useAuth";
import { useForm } from "react-hook-form";

const BookTable = () => {
  const { user } = useAuth();
  //   console.log(user);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const booking = {
      date: data.date,
      time: data.time,
      phone: data.phone,
      name: data.name,
      email: data.email,
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
        fetch("https://dineease-server-lemon.vercel.app/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(booking),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire("BOOKED!", "Your table has been booked.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl">
        Book Your Table <span className="text-red-700">{user.displayName}</span>
      </h1>
      <div className="mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-bold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="border rounded w-full py-2 px-3"
              {...register("date", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 font-bold mb-2"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="border rounded w-full py-2 px-3"
              {...register("time", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
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
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="border rounded w-full py-2 px-3"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
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

export default BookTable;
