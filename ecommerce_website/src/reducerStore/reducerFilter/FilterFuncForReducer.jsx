

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

    // Sorting the products on the basis of price from highest to lowest;
    // case "SORTING_PRODUCT_PRICE":
    //   let latestSortData;
    //   let tempSortData = [...action.payload];

    //   // Sorting the product ascendingly on the basis of alphabets;
    //   if (currFilterState.sorting_price === "a-z") {
    //     latestSortData = tempSortData.sort((a, b) => {
    //       return a.name.localeCompare(b.name);
    //     })
    //   }
    //   // Sorting the product decendingly on the basis of alphabets;
    //   if (currFilterState.sorting_price === "z-a") {
    //     latestSortData = tempSortData.sort((a, b) => {
    //       return b.name.localeCompare(a.name);
    //     })
    //   }
    //   // Sorting the product ascendingly on the basis of price;
    //   if (currFilterState.sorting_price === "lowest") {
    //     const sortingProLowest = ((a, b) => {
    //       return a.price - b.price;
    //     })
    //     latestSortData = tempSortData.sort(sortingProLowest);
    //   }
    //   // Sorting the product ascendingly on the basis of price;
    //   if (currFilterState.sorting_price === "highest") {
    //     const sortingProHighest = ((a, b) => {
    //       return b.price - a.price;
    //     })
    //     latestSortData = tempSortData.sort(sortingProHighest);
    //   }
    // return {
    //   ...currFilterState,
    //   filter_products: latestSortData,
    // }

    // Sorting the products on the basis of price from highest to lowest;
    case "SORTING_PRODUCT_PRICE":

      let latestSortData;
      const { filter_products, sorting_price } = currFilterState;
      let tempSortProduct = [...filter_products];

      const sortingProductsPrice = (a, b) => {
        if (sorting_price === "lowest") {
          return a.price - b.price;
        }
        if (sorting_price === "highest") {
          return b.price - a.price;
        }
        if (sorting_price === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_price === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      latestSortData = tempSortProduct.sort(sortingProductsPrice);
      return {
        ...currFilterState,
        filter_products: latestSortData,
      }

    // Searching or Filtering the products on the basis;
    case "UPDATE_FILTER_ON_SEARCH":
      const { name, value } = action.payload;
      return {
        ...currFilterState,
        search_filtering: {
          ...currFilterState.search_filtering,
          [name]: value,
        },
      }

    // Updation of Searching or Filtering the products on the basis;
    case "PRODUCTS_FILTERATION":
      let { all_products } = currFilterState;
      let tempFilterProducts = [...all_products];

      const { text, category } = currFilterState.search_filtering;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((myElem) => {
          return myElem.name.toLowerCase().includes(text);
        })
      }
      if (category) {
        tempFilterProducts = tempFilterProducts.filter((myElem) => {
          return myElem.category === category;
        })
      }
      return {
        ...currFilterState,
        filter_products: tempFilterProducts,
      }

    default: return currFilterState;
  }
}

export default FilterFuncForReducer;