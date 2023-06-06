//context
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/Details.module.scss";

//icons
import arrowDown from "../assets/arrow-down.svg";
import search from "../assets/search.svg";
import setting from "../assets/setting.svg";
import more from "../assets/more.svg";
import plus from "../assets/plus.svg";

const Details = () => {
  const users = useContext(UserContext).users;

  return (
    <div className={styles.container}>
      <div>
        <h3>All ({users.total})</h3>
        <img className={styles.arrowIcon} alt="arrow icon" src={arrowDown} />
        <button>
          Add new <img alt="plus icon" src={plus} />
        </button>
      </div>
      <div>
        <img className={styles.icons} alt="search icon" src={search} />
        <img className={styles.icons} alt="setting icon" src={setting} />
        <img className={styles.icons} alt="more icon" src={more} />
      </div>
    </div>
  );
};

export default Details;
