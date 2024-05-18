import classes from "./FilterSection.module.css";


const FilterSection = () => {

  return (
    <div className={classes.filter_search}>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" name="text" />
      </form>
    </div>
  )
}

export default FilterSection;