import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";
import type { ITodo } from "../interfaces/User.interface";

const useFetchUsers = () => {
  const result = useQuery<ITodo[]>({
    queryKey: ["todos"],
    queryFn: fetchUsers,
  });
  return result;
};

export default useFetchUsers;
