import classes from "./ProductItems.module.css";
import { NavLink } from "react-router-dom";

const ProductItems = (currValue) => {
  const { id, name, image, price, category } = currValue;

  return (
    <NavLink
      to={`/singleproduct/${id}`}
      className={classes.navlink_productItems}
    >
      <div className={classes.card}>
        <figure>
          <figcaption className={classes.caption}> {category} </figcaption>
          <img src={image} alt={name} />
        </figure>

        <div className={classes.card_data}>
          <div className={classes.card_data_flex}>
            <h3> {name} </h3>
            <p className={classes.card_data__price}> {price} </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductItems;
