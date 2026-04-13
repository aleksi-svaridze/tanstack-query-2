import { useQuery } from "@tanstack/react-query";
import { fetchSingleUser } from "../api/fetchSingleUser";
import type { ITodo } from "../interfaces/User.interface";

export const useFetchSingleUser = (id: number) => {
  const result = useQuery<ITodo>({
    queryKey: ["todo"],
    queryFn: () => fetchSingleUser(id),
  });
  return result;
};
