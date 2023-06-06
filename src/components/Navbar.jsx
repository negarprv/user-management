//context
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const data = useContext(UserContext);
  const setTotalPages = data.setTotalPages;
  const setUsers = data.setUsers;
  const users = data.users;

  useEffect(() => {
    if (search) {
      setTotalPages(true);
    } else if (search == "") {
      setTotalPages(false);
    }
  }, [search, setTotalPages]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
    seachedUsersHandler();
  };

  const seachedUsersHandler = () => {
    const searchedUsers = users.data
      ? users.data.filter((user) =>
          user.first_name.toLowerCase().includes(search.toLowerCase())
        )
      : users.filter((user) =>
          user.first_name.toLowerCase().includes(search.toLowerCase())
        );

    if (searchedUsers.length !== 0) {
      setUsers(searchedUsers);
    }
  };

  return (
    <div className={styles.container}>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
      ></input>
      <img alt="user image" src={"https://reqres.in/img/faces/1-image.jpg"} />
    </div>
  );
};

export default Navbar;
