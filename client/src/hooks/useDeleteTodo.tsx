import { useMutation } from "@tanstack/react-query";

import deleteTodo from "../api/todo/deleteTodo";
import { client } from "../tanstack-query/client";

const useDeleteTodo = () => {
  const result = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onError: (error) => console.log(error),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return result;
};

export default useDeleteTodo;
