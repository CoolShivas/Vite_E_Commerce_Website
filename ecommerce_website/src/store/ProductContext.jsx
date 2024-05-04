import { createContext, useContext } from "react";
// Starting or creation of CreateContext
const ProductContext = createContext({
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
});

export default ProductContext;
// Ending or creation of CreateContext

// Starting or creation of Custom Hook
const formationOfCustomHook = () => {
  return useContext(ProductContext);
};

export { formationOfCustomHook };
// Endng or creation of Custom Hook
