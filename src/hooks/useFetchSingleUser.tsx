import { useQuery } from "@tanstack/react-query";
import { fetchSingleUser } from "../api/fetchSingleUser";
import type { IUser } from "../interfaces/User.interface";

export const useFetchSingleUser = (id: number) => {
  const result = useQuery<IUser>({
    queryKey: ["user"],
    queryFn: () => fetchSingleUser(id),
  });
  return result;
};
