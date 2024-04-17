import { useParams } from "react-router-dom";
import { formationOfCustomHook } from "../../store/AppContext";
import { useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const { getSingleProduct, isSingleLoading, singleProduct } =
    formationOfCustomHook();
  console.log(getSingleProduct); // // Here, we are able to access the single product function;
  console.log(singleProduct); // // Here, we are able to access the single product function only but we want the specific product details. For that we have to use the useParam hook for that ;

  useEffect(() => {
    getSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`);
  }, []);

  return <h2> Unique single products are here. </h2>;
};

export default SingleProduct;
