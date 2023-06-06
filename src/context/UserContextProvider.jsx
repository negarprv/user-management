import { useState, useEffect, createContext } from "react";
import { getUsers } from "../services/api";

//API

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUsers(await getUsers(currentPage));
    };
    fetchAPI();
  }, [currentPage]);

  return (
    <UserContext.Provider
      value={{
        users: users,
        setCurrentPage: setCurrentPage,
        currentPage: currentPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
