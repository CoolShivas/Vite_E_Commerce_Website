import PageNavigation from "../Navigation/PageNavigation";
import { useParams } from "react-router-dom";
import { formationOfCustomHook } from "../../store/AppContext";
import { useEffect } from "react";

// const API2 = "https://api.pujakaitem.com/api/products?id=thapaseialnoa";

const API2 = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const { getSingleProduct, isSingleLoading, singleProduct } =
    formationOfCustomHook();
  console.log(getSingleProduct); // // Here, we are able to access the single product function;
  console.log(singleProduct); // // Here, we are able to access the single product function only but we want the specific product details. For that we have to use the useParam hook for that ;

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API2}?id=${id}`);
  }, []);

  return (
    <h2>
      <PageNavigation titleNavigator={name}></PageNavigation>
    </h2>
  );
};

export default SingleProduct;
