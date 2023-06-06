//css
import styles from "../styles/Pagination.module.scss";

//
import classNames from "classnames";

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const liClasses = classNames({
    [styles.page_item]: true,
    [styles.active]: page == currentPage,
    [styles.disabled]: page !== currentPage,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className={styles.page_link}>{page}</span>
    </li>
  );
};

export default PaginationItem;
