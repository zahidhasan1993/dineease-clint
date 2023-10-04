import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loader } = useAuth();
  const myAxios = useAxiosSecure();
  // const token = localStorage.getItem("ACCESS-TOKEN");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await myAxios(`/carts?email=${user?.email}`);

      return res.data;
    },
  });

  console.log();
  return { cart, refetch };
};

export default useCart;
