import classes from "./FilterSection.module.css";
import { useFilterCustomHook } from "../../store/FilterContext";


const FilterSection = () => {

  const { search_filtering: { text }, updateFilteringBySearch, all_products } = useFilterCustomHook();

  // // To get the Unique data of each fields;

  const gettingUniqueData = (data, property) => {
    let newValue = data.map((arr) => {
      return arr[property];
      // // arr.category will provide all the products categories such as mobile, laptop , watches, etc.
      // // arr[property] will provide all the categories access for all such mobile category only or laptop category, etc.
      // // if select the mobile category or laptop category or watch categroy using arr[property];
      // // Whereas arr.category will provide the array of products categories only;
    })
    return newValue = ["All", ...new Set(newValue)]; // // Here, we are getting the specific categroies only;
    // // Now, on specific category we are able to select the products accordingly;
    // console.log(newValue);
  };



  // // We need Unique Data;
  const categoryOnlyData = gettingUniqueData(all_products, "category");

  return (
    <>
      <div className={classes.filter_search}>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <input type="text" name="text" value={text} onChange={updateFilteringBySearch} placeholder="Search" className="form-control" />
        </form>
      </div>

      <div className={classes.filter_categroy}>
        <h3> Category </h3>
        <div className={classes.category_products}>
          {categoryOnlyData.map((brrElem, index) => {
            return <button key={index}
              type="button" name="category"
              value={brrElem}
              onClick={updateFilteringBySearch}

            >
              {brrElem}

            </button>
          })}
        </div>
      </div>

    </>
  )
}

export default FilterSection;