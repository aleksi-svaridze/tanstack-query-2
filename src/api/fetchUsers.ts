import $axios from "../http/axios";

export async function fetchUsers() {
  const response = await $axios.get("/users");
  return response.data;
}
