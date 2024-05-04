import FilterFuncForReducer from "../reducerStore/reducerFilter/FilterFuncForReducer";
import { formationOfCustomHook } from "./ProductContext";
import { createContext, useContext, useEffect, useReducer } from "react";

const FilterContext = createContext();

const FilterInitialState = {
    filter_products : [],
    all_products : [],
};


export const FilterContextProvider = (props) =>{
    
    const {products} = formationOfCustomHook();
    // console.log(products, 'data of products ')

    const [newFilterData, dispatchFilterData] = useReducer(FilterFuncForReducer, FilterInitialState);

    useEffect(()=>{
        dispatchFilterData({
            type : "LOAD_FILTER_PRODUCTS" , 
            payload : products,
        })
    },[products]);

    return <FilterContext.Provider value={
        {...newFilterData}
    }>
        {props.children}
    </FilterContext.Provider>
};


export const useFilterCustomHook = () =>{
    return useContext(FilterContext);
};


export default FilterContext;