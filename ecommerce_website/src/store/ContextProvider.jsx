import PureFuncForReducer from "../reducerStore/PureFuncForReducer";
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

const ContextProvider = (props) => {
  const [newData, dispatchData] = useReducer(PureFuncForReducer, initialState);

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
