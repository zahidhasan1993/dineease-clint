import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("https://dineease-server-lemon.vercel.app/menu");
      const data = res.json();
      return data;
    },
  });

  return { menu, refetch };
};

export default useMenu;
