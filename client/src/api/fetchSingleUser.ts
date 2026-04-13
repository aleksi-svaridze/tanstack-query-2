import $axios from "../http/axios";

export async function fetchSingleUser(id: number) {
  const response = await $axios.get(`/todos/${id}`);
  return response.data;
}
