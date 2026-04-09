import $axios from "../http/axios";

export async function fetchSingleUser(id: number) {
  const response = await $axios.get(`/users/${id}`);
  return response.data;
}
