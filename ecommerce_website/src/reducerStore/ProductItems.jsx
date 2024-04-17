import FormatPrice from "./FormatPrice";
import classes from "./ProductItems.module.css";
import { NavLink } from "react-router-dom";

const ProductItems = (currValue) => {
  const { id, name, image, price, category } = currValue;

  return (
    <NavLink
      to={`/singleproducts/${id}`}
      className={classes.navlink_productItems}
    >
      <div className={classes.card}>
        <figure>
          <img src={image} alt={name} />
          <figcaption className={classes.caption}> {category} </figcaption>
        </figure>

        <div className={classes.card_data}>
          <div className={classes.card_data__flex}>
            <h3> {name} </h3>
            <p className={classes.card_data__price}>
              {<FormatPrice priceABC={price}></FormatPrice>}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductItems;
