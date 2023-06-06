import { useContext } from "react";
//components
import Navbar from "./Navbar";
import Details from "./Details";
import Table from "./Table";

//context
import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/UserManagment.module.scss";

//loading
import spinner from "../assets/loadingSpinner.svg";

const UserManagement = () => {
  const data = useContext(UserContext);
  const users = data.users;
  console.log(users);
  // console.log(setCurrentPage);
  return (
    <div className={styles.container}>
      {users.length == 0 ? (
        <img src={spinner} alt="Loading..." />
      ) : (
        <>
          <Navbar />
          <Details />
          <Table />
        </>
      )}
    </div>
  );
};

export default UserManagement;
