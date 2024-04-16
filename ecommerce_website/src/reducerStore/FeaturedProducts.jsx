import ProductItems from "./ProductItems";
import classes from "./FeaturedProducts.module.css";
import { formationOfCustomHook } from "../store/AppContext";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = formationOfCustomHook();
  // console.log(isLoading, "isloading checking");
  // console.log(featureProducts, "featuredProducts checking");

  if (isLoading) {
    return <div> .......Loading </div>;
  }

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.intro_data}>Check Now!</div>
        <div className={classes.common_heading}>Our Feature Services</div>
        <div className={classes.grid_three__column}>
          {/* {console.log(featureProducts)} */}
          {featureProducts.map((currValue) => {
            return (
              // <li>
              //   {currValue.id} {currValue.name} {currValue.image}
              //   {currValue.price} {currValue.category}
              // </li>

              // <ProductItems key={currValue.id} {...currValue} />
              <ProductItems key={currValue.id} {...currValue}></ProductItems>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
