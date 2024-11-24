import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useNewsData(queryOptions = {}) {
  const fetchNews = async () => {
    const response = await axios.get("/news.json");
    return response.data;
  };

  return useQuery({
    queryKey: ["newsData"],
    queryFn: fetchNews,
    ...queryOptions,
  });
}
