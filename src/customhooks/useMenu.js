import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  // }, []);
  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      const data = res.json();
      return data;
    },
  });

  return { menu, refetch };
};

export default useMenu;
