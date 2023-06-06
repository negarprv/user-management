//css
import styles from "../styles/Header.module.scss";

const Header = ({ titles }) => {
  const [Image, Name, Email] = titles;
  return (
    <div className={styles.container}>
      <input type="checkbox"></input>
      <p>{Image}</p>
      <p>{Name}</p>
      <p>{Email}</p>
    </div>
  );
};

export default Header;
