import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const getUsers = async (page) => {
  const response = await axios.get(`${BASE_URL}/users?page=${page}`);
  console.log(page);
  return response.data;
};

export { getUsers };
