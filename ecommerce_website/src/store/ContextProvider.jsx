import axios from "axios";
import { useEffect } from "react";
import AppContext from "./AppContext";

// Starting or creation of Context Provider
const API = "https://api.pujakaitem.com/api/products";

const ContextProvider = (props) => {
  const getProducts = async (url) => {
    const response = await axios.get(url);
    // console.log(response);
    const production = await response.data;
    console.log(production);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "Shiva Chouhan" }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
// Ending or creation of Context Provider
