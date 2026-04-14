import { useMutation } from "@tanstack/react-query";
import type { ITodo } from "../interfaces/todo.interface";
import { client } from "../tanstack-query/client";
import updateTodo from "../api/todo/updateTodo";

const useUpdateTodo = () => {
  const result = useMutation({
    mutationFn: (data: Partial<ITodo>) => updateTodo(data),
    onError: (error) => console.log(error),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return result;
};

export default useUpdateTodo;
