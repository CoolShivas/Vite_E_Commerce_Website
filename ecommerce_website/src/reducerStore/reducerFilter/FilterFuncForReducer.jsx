

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

    case "SORTING_BY_PRICE":
      // let userSortPrice = document.getElementById("dropdown");
      // let sortFilterPrice = userSortPrice.options[userSortPrice.selectedIndex].value;
      // console.log(sortFilterPrice);
      return {
        ...currFilterState,
        // sorting_price: sortFilterPrice,
        sorting_price: action.payload,
      }

    case "SORTING_PRODUCT_PRICE":
      let latestSortData;
      let tempSortData = [...action.payload];

      // Sorting the product ascendingly on the basis of alphabets;
      if (currFilterState.sorting_price === "a-z") {
        latestSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
      }
      // Sorting the product decendingly on the basis of alphabets;
      if (currFilterState.sorting_price === "z-a") {
        latestSortData = tempSortData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        })
      }
      // Sorting the product ascendingly on the basis of price;
      if (currFilterState.sorting_price === "lowest") {
        const sortingProLowest = ((a, b) => {
          return a.price - b.price;
        })
        latestSortData = tempSortData.sort(sortingProLowest);
      }
      // Sorting the product ascendingly on the basis of price;
      if (currFilterState.sorting_price === "highest") {
        const sortingProHighest = ((a, b) => {
          return b.price - a.price;
        })
        latestSortData = tempSortData.sort(sortingProHighest);
      }

      return {
        ...currFilterState,
        filter_products: latestSortData,
      }

    default: return currFilterState;
  }
}

export default FilterFuncForReducer;