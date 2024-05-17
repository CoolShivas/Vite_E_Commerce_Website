

const FilterFuncForReducer = (currFilterState, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...currFilterState,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...currFilterState,
        grid_view: true,
      }

    case "SET_LIST_VIEW":
      return {
        ...currFilterState,
        grid_view: false,
      }

    default: return currFilterState;
  }
}

export default FilterFuncForReducer;