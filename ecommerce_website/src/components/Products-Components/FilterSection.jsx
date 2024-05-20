import FormatPrice from "../../reducerStore/FormatPrice";
import { FaCheck } from "react-icons/fa";
import classes from "./FilterSection.module.css";
import { useFilterCustomHook } from "../../store/FilterContext";


const FilterSection = () => {

  const { search_filtering: { text, category, company, colors, price, maxPrice, minPrice }, updateFilteringBySearch, all_products, clearFilters } = useFilterCustomHook();

  // // To get the Unique data of each fields;

  const gettingUniqueData = (data, property) => {
    let newValue = data.map((arr) => {
      return arr[property];
      // // arr.category will provide all the products categories such as mobile, laptop , watches, etc.
      // // arr[property] will provide all the categories access for all such mobile category only or laptop category, etc.
      // // if select the mobile category or laptop category or watch categroy using arr[property];
      // // Whereas arr.category will provide the array of products categories only;
    })
    // if (property === "colors") {
    //   return (newValue = ["all", ...new Set([].concat(...newValue))])
    // }
    // else {
    //   return newValue = ["all", ...new Set(newValue)];
    // }
    // // Here, we are getting the specific categroies only;
    // // Now, on specific category we are able to select the products accordingly;
    // console.log(newValue);
    if (property === "colors") {
      newValue = newValue.flat();// // Same thing done without using new Set and concat;
    }

    return newValue = ["all", ...new Set(newValue)];

  };



  // // We need Unique Data;
  const categoryOnlyData = gettingUniqueData(all_products, "category");
  const companyOnlyData = gettingUniqueData(all_products, "company");
  // console.log(companyOnlyData)// Able to acces the companies like apple, dell, etc.
  const colorsOnlyData = gettingUniqueData(all_products, "colors");
  // console.log(colorsOnlyData);// Able to acces the colors of all producst.

  return (
    <>
      <div className={classes.filter_search}>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <input type="text" name="text" value={text} onChange={updateFilteringBySearch} placeholder="Search" className="form-control" />
        </form>
      </div>

      <div className={classes.filter_categroy}>
        {/* Starting of CATEGORY wise data */}
        <h3> Category </h3>
        <div className={classes.category_products}>
          {categoryOnlyData.map((brrElem, index) => {
            return <button
              key={index}
              type="button"
              name="category"
              value={brrElem}
              onClick={updateFilteringBySearch}

            >
              {brrElem}

            </button>
          })}
        </div>
        {/* Ending of CATEGORY wise data */}

      </div>

      <div className={classes.filter_company}>
        {/* Starting of COMPANY wise data */}
        <h3> Company </h3>
        <div className={classes.filter_company__products}>
          <select name="company" id="company" className={classes.filter_company__select}
            onClick={updateFilteringBySearch}
          >
            {companyOnlyData.map((crrElem, index) => {
              return <option
                key={index}
                name="company"
                value={crrElem}
              >
                {crrElem}

              </option>
            })}
          </select>

        </div>
        {/* Ending of COMPANY wise data */}
      </div>

      {/* Starting of COLORS wise data */}
      <div className={classes.filter_colors}>
        <h3> Colors </h3>
        <div className={classes.filter_colors__products}>
          {colorsOnlyData.map((drrElem, index) => {
            return <button
              key={index}
              value={drrElem}
              name="colors"
              type="button"
              style={{ backgroundColor: drrElem }}
              onClick={updateFilteringBySearch}
            >
              {/* {drrElem} */}
              {colors === drrElem ? <FaCheck /> : null}

            </button>
          })}
        </div>
      </div>
      {/* Ending of COLORS wise data */}

      {/* Starting of PRICE RANGE  wise data */}
      <div className={classes.filter_price}>
        <h3> Price Range </h3>
        <div className={classes.filter_price__products}>
          <p><FormatPrice priceABC={price}></FormatPrice></p>
          <input type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilteringBySearch} />
        </div>
      </div>
      {/* Ending of PRICE RANGE  wise data */}

      {/* Starting of CLEAR ALL FILTERS  wise data */}
      <div className={classes.filter_all__clear}>
        <button type="button" onChange={clearFilters} className={classes.clear_filters}> Clear Filters </button>
      </div>
      {/* Ending of CLEAR ALL FILTERS  wise data */}

    </>
  )
}

export default FilterSection;