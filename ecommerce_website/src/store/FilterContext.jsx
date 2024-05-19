import FilterFuncForReducer from "../reducerStore/reducerFilter/FilterFuncForReducer";
import { formationOfCustomHook } from "./ProductContext";
import { createContext, useContext, useEffect, useReducer } from "react";

const FilterContext = createContext();

const FilterInitialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,// It will display the Grid View of products or List View of products depends of true or false;
    sorting_price: "lowest",
    search_filtering: {
        text: "",
        catgory: "all",
        company: "all",
    },
};


export const FilterContextProvider = (props) => {

    const { products } = formationOfCustomHook();
    // console.log(products, 'data of products ')

    const [newFilterData, dispatchFilterData] = useReducer(FilterFuncForReducer, FilterInitialState);

    const gridViewFunc = () => {
        return dispatchFilterData({
            type: "SET_GRID_VIEW",
        })
    };


    const listViewFunc = () => {
        return dispatchFilterData({
            type: "SET_LIST_VIEW",
        })
    };


    const sortingOrFilterByPrice = (event) => {
        let userSelectValue = event.target.value;
        return dispatchFilterData({
            type: "SORTING_BY_PRICE",
            payload: userSelectValue,
        })
    };

    // Updating the filter or search values
    const updateFilteringBySearch = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatchFilterData({
            type: "UPDATE_FILTER_ON_SEARCH",
            payload: { name, value },
        })
    };

    // Sorting the products on the basis of price from highest to lowest;
    useEffect(() => {
        dispatchFilterData({
            type: "PRODUCTS_FILTERATION",
        })
        // console.log('Sorting products on price');
        dispatchFilterData({
            type: "SORTING_PRODUCT_PRICE",
            payload: products,
        })
    }, [newFilterData.sorting_price, newFilterData.search_filtering]);


    useEffect(() => {
        dispatchFilterData({
            type: "LOAD_FILTER_PRODUCTS",
            payload: products,
        })
    }, [products]);

    return <FilterContext.Provider value={{
        ...newFilterData,
        gridViewFunc,
        listViewFunc,
        sortingOrFilterByPrice,
        updateFilteringBySearch,
    }}>
        {props.children}
    </FilterContext.Provider>
};


export const useFilterCustomHook = () => {
    return useContext(FilterContext);
};


export default FilterContext;