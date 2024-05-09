import FilterFuncForReducer from "../reducerStore/reducerFilter/FilterFuncForReducer";
import { formationOfCustomHook } from "./ProductContext";
import { createContext, useContext, useEffect, useReducer } from "react";

const FilterContext = createContext();

const FilterInitialState = {
    filter_products : [],
    all_products : [],
    grid_view : false,// It will display the Grid View of products or List View of products depends of true or false;
};


export const FilterContextProvider = (props) =>{
    
    const {products} = formationOfCustomHook();
    // console.log(products, 'data of products ')

    const [newFilterData, dispatchFilterData] = useReducer(FilterFuncForReducer, FilterInitialState);

    const gridViewFunc = () =>{
        return dispatchFilterData({
            type : "SET_GRID_VIEW",
        })
    };

    useEffect(()=>{
        dispatchFilterData({
            type : "LOAD_FILTER_PRODUCTS" , 
            payload : products,
        })
    },[products]);

    return <FilterContext.Provider value={{
        ...newFilterData,
        gridViewFunc
    }}>
        {props.children}
    </FilterContext.Provider>
};


export const useFilterCustomHook = () =>{
    return useContext(FilterContext);
};


export default FilterContext;