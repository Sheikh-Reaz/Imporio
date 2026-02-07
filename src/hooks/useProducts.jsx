import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useProducts = (category) => {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["products", category || "all"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        category ? `/products?category=${category}` : "/products"
      );
      return res.data;
    },
  
  });
};

export default useProducts;
