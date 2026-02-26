import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg"; // adjust path

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default Search;