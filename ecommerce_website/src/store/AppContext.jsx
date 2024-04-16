import { createContext, useContext, useEffect } from "react";
// Starting or creation of CreateContext
const AppContext = createContext({
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
});

export default AppContext;
// Ending or creation of CreateContext

// Starting or creation of Custom Hook
const formationOfCustomHook = () => {
  return useContext(AppContext);
};

export { formationOfCustomHook };
// Endng or creation of Custom Hook
