import { useState, useEffect, createContext } from "react";
import { getUsers } from "../services/api";

//API

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUsers(await getUsers(currentPage, totalPages));
    };
    fetchAPI();
  }, [currentPage, totalPages]);

  return (
    <UserContext.Provider
      value={{
        users: users,
        setCurrentPage: setCurrentPage,
        currentPage: currentPage,
        setTotalPages: setTotalPages,
        setUsers: setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
