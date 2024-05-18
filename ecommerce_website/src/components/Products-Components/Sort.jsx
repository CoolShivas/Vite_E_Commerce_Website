import { useFilterCustomHook } from "../../store/FilterContext";
import styles from "./Sort.module.css";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {

  const { gridViewFunc, listViewFunc, filter_products, sortingOrFilterByPrice } = useFilterCustomHook();
  return (
    <div className={styles.sort_section}>

      {/* Starting of First Column */}

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

      {/* Ending of First Column */}

      {/* Starting of Second Column */}

      <div className={styles.product_data}>
        <h2> {`${filter_products.length} Product Available`} </h2>
      </div>

      {/* Ending of Second Column */}

      {/* Starting of Third Column */}

      <div className={styles.sort_selection}>
        {/* <h2> dropdown </h2> */}
        <select name="dropdown" id="dropdown" className={styles.dropdown_select} onClick={sortingOrFilterByPrice}>
          <option value="lowest"> Price (lowest) </option>
          <option value="#" disabled></option>
          <option value="highest"> Price (highest) </option>
          <option value="#" disabled></option>
          <option value="a-z"> Price (a-z) </option>
          <option value="#" disabled></option>
          <option value="z-a"> Price (z-a) </option>
        </select>
      </div>

      {/* Ending of Third Column */}

    </div>
  )
}

export default Sort;