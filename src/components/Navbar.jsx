//context
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const users = useContext(UserContext);
  const userImg = users.data.find((item) => item.id === 1).avatar;
  return (
    <div className={styles.container}>
      <h2>User List</h2>
      <input type="text" placeholder="Search..."></input>
      <img alt="user image" src={userImg} />
    </div>
  );
};

export default Navbar;
