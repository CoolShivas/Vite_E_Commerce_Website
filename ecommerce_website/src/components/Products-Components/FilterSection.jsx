import classes from "./FilterSection.module.css";
import { useFilterCustomHook } from "../../store/FilterContext";


const FilterSection = () => {

  const { search_filtering: { text }, updateFilteringBySearch, all_products } = useFilterCustomHook();

  // // To get the Unique data of each fields;

  const gettingUniqueData = (all_products) => {
    let newValue = all_products.map((arr) => {
      return arr.category;
      // // arr.category will provide all the products categories such as mobile, laptop , watches, etc.
    })
    console.log(newValue);
  };



  // // We need Unique Data;
  const categoryOnlyData = gettingUniqueData(all_products);

  return (
    <div className={classes.filter_search}>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" name="text" value={text} onChange={updateFilteringBySearch} />
      </form>
    </div>
  )
}

export default FilterSection;