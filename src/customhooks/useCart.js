import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { DataProvider } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const {user} = useContext(DataProvider);
  const myAxios = useAxiosSecure();
  const { refetch , data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await myAxios(`/carts?email=${user?.email}`);
      // queryFn: async () => {
      //   const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
      //     headers: {
      //       authorization: `bearer ${token}`
      //     }
      //   });
      return res.data;
    }
  })

  // console.log(cart);
  return {cart,refetch};
};

export default useCart;