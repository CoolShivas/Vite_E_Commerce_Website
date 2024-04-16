import { formationOfCustomHook } from "../store/AppContext";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = formationOfCustomHook();

  // console.log(isLoading, "isloading checking");
  console.log(featureProducts, "featuredProducts checking");

  return <div>FeaturedProducts</div>;
};

export default FeaturedProducts;
