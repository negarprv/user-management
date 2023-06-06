//context
// import { useContext } from "react";
// import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  // const users = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h2>User List</h2>
      <input type="text" placeholder="Search..."></input>
      <img alt="user image" src={"https://reqres.in/img/faces/1-image.jpg"} />
    </div>
  );
};

export default Navbar;
