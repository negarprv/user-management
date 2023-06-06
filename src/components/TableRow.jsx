//css
import styles from "../styles/TableRow.module.scss";

//helper
import { concatenate } from "../helpers/concatenate";

const TableRow = ({ data }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox"></input>
      <img alt="user image" src={data.avatar} />
      <p>{concatenate(data.first_name, data.last_name)}</p>
      <p>{data.email}</p>
    </div>
  );
};

export default TableRow;
