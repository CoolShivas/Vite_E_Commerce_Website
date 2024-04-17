import { formationOfCustomHook } from "../../store/AppContext";
import { useEffect } from "react";

const SingleProduct = () => {
  const { getSingleProduct } = formationOfCustomHook();
  console.log(getSingleProduct); // // Here, we are able to access the single product function;

  useEffect(() => {
    getSingleProduct(
      "https://api.pujakaitem.com/api/products?id=thapaseialnoa"
    );
  }, []);

  return <h2> Unique single products are here. </h2>;
};

export default SingleProduct;
// `https://api.pujakaitem.com/api/products?id=thapaseialnoa`;
