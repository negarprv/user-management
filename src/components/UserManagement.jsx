import { useContext } from "react";
//components
import Navbar from "./Navbar";
import Details from "./Details";
import Table from "./Table";

//context
import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/UserManagment.module.scss";

const UserManagement = () => {
  const users = useContext(UserContext);
  console.log(users);
  return (
    <div className={styles.container}>
      {users.length == 0 ? (
        <p>loading</p>
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
