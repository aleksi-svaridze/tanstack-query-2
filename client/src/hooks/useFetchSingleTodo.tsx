import { useQuery } from "@tanstack/react-query";
import { fetchSingleTodo } from "../api/todo/fetchSingleTodo";
import type { ITodo } from "../interfaces/todo.interface";

export const useFetchSingleTodo = (id: number) => {
  const result = useQuery<ITodo>({
    queryKey: ["todo"],
    queryFn: () => fetchSingleTodo(id),
  });
  return result;
};
