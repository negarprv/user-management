import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const getUsers = async (page, total) => {
  const response = await axios.get(
    `${BASE_URL}/users?page=${page}${total ? "&per_page=12" : ""}`
  );
  return response.data;
};

export { getUsers };
