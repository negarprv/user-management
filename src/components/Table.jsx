//component
import Header from "./Header";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

//context
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

//css
import styles from "../styles/Table.module.scss";

const Table = () => {
  const data = useContext(UserContext);
  const users = data.users;
  const setCurrentPage = data.setCurrentPage;
  const currentPage = data.currentPage;
  console.log(users);

  return (
    <div className={styles.container}>
      <Header titles={["Image", "Name", "Email"]} />
      <div className={styles.tableBody}>
        {users.data
          ? users.data.map((user) => <TableRow key={user.id} data={user} />)
          : users.map((user) => <TableRow key={user.id} data={user} />)}
      </div>

      <Pagination
        currentPage={currentPage}
        total={users.total}
        limit={users.per_page}
        onPageChange={(page) => setCurrentPage(page)}
        pageCount={users.total_pages}
      />
    </div>
  );
};

export default Table;
