import $axios from "../../http/axios";
import type { ITodo } from "../../interfaces/todo.interface";

export default async function createTodo(data: Partial<ITodo>) {
  const res = await $axios.post("todos", { todo: { ...data } });
  return res.data;
}
