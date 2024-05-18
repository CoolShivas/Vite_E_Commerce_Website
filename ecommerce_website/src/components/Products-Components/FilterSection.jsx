import classes from "./FilterSection.module.css";
import { useFilterCustomHook } from "../../store/FilterContext";


const FilterSection = () => {

  const { search_filtering: { text }, updateFilteringBySearch } = useFilterCustomHook();

  return (
    <div className={classes.filter_search}>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" name="text" value={text} onChange={updateFilteringBySearch} />
      </form>
    </div>
  )
}

export default FilterSection;