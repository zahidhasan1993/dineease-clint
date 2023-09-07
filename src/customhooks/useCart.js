import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { DataProvider } from "../providers/AuthProvider";

const useCart = () => {
  const {user} = useContext(DataProvider);
  const { refetch , data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
      return res.json();
    }
  })

  // console.log(cart);
  return {cart,refetch};
};

export default useCart;