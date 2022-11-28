import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../configs/requests";

export const fetchPost = async (url: string) => {
  return await apiRequest("/qrcode/", "post", {
    target_url: url,
  });
};

export default function usePost(url: string) {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPost(url),
  });
}
