import { useState, useEffect, createContext } from "react";
import { getUsers } from "../services/api";

//API

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUsers(await getUsers());
    };
    fetchAPI();
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
