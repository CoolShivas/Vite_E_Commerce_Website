import { useFilterCustomHook } from "../../store/FilterContext";
import styles from "./Sort.module.css";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {

  const { gridViewFunc, listViewFunc } = useFilterCustomHook();
  return (
    <div className={styles.sort_section}>

      <div className={styles.sorting_list__grid}>
        <button
          className={styles.sort_btn}
          onClick={gridViewFunc}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={styles.sort_btn}
          onClick={listViewFunc}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className={styles.product_data}>
        <h2> Product Available </h2>
      </div>

      <div className={styles.sort_selection}>
        <h2> dropdown </h2>
      </div>

    </div>
  )
}

export default Sort;