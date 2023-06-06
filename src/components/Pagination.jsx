//component
import PaginationItem from "./PaginationItem";

//css
import styles from "../styles/Pagination.module.scss";

//helper
import { range } from "../helpers/range";

const Pagination = ({ currentPage, total, limit, onPageChange, pageCount }) => {
  const pages = range(1, pageCount);

  return (
    <div className={styles.container}>
      <p>
        Showing {6 * (currentPage - 1) + 1} to {currentPage * limit} of {total}{" "}
        entries
      </p>

      <ul className={styles.pagination}>
        <li>
          <span className={styles.page_link}>«</span>
        </li>
        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
        <li>
          <span className={styles.page_link}>»</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
