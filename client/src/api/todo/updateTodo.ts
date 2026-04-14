import $axios from "../../http/axios";
import type { ITodo } from "../../interfaces/todo.interface";

export default async function updateTodo(data: Partial<ITodo>) {
  const res = await $axios.put(`todos`, { todo: { ...data } });
  return res.data;
}
