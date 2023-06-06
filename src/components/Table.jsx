//context
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const Table = () => {
  const users = useContext(UserContext);
  console.log(users);
  return <div>table</div>;
};

export default Table;
