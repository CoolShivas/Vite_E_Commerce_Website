import axios from "axios";
import { useEffect, useReducer } from "react";
import AppContext from "./AppContext";

// Starting or creation of Context Provider
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const pureFuncForReducer = (currState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...currState,
      isLoading: true,
    };
  } else if (action.type === "SET_API_DATA") {
    const featureData = action.payload.filter((currElem) => {
      return currElem.featured === true;
    });
    return {
      ...currState,
      isLoading: false,
      products: action.payload,
      featureProducts: featureData,
    };
  } else {
    return {
      ...currState,
      isLoading: false,
      isError: true,
    };
  }
};

const ContextProvider = (props) => {
  const [newData, dispatchData] = useReducer(pureFuncForReducer, initialState);

  const getProducts = async (url) => {
    dispatchData({
      type: "SET_LOADING",
    });

    try {
      const response = await axios.get(url);
      // console.log(response);
      const productResponse = await response.data;
      // console.log(production);
      dispatchData({
        type: "SET_API_DATA",
        payload: productResponse,
      });
    } catch (error) {
      console.log(error);
      dispatchData({
        type: "API_ERROR",
      });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...newData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
// Ending or creation of Context Provider
