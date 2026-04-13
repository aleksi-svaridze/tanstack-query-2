import $axios from "../../http/axios";

export async function fetchTodos() {
  const response = await $axios.get("/todos");
  return response.data;
}
