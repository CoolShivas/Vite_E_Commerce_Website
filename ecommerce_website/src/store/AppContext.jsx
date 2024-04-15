import axios from "axios";
import { createContext, useContext, useEffect } from "react";
// Starting or creation of CreateContext
const AppContext = createContext();

export default AppContext;
// Ending or creation of CreateContext

// Starting or creation of Context Provider
const API = "https://api.pujakaitem.com/api/products";

const ContextProvider = ({ children }) => {
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
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
// Ending or creation of Context Provider

// Starting or creation of Custom Hook
const formationOfCustomHook = () => {
  return useContext(AppContext);
};

export { formationOfCustomHook };
// Endng or creation of Custom Hook
