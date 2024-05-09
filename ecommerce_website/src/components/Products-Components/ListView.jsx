import { NavLink } from "react-router-dom";
import classes from "./ListView.module.css";
import FormatPrice from "../../reducerStore/FormatPrice";

const ListView = ({ filter_productsABC }) => {
  return (
    <div className={classes.section_listView}>
      <div className={classes.container_grid__listView}>
        {filter_productsABC.map((currElem) => {
          const { id, name, image, price, description } = currElem;
          return (
            <div className={classes.grid_two__col___listview}>
              <div className={classes.listview_images}>
                <figure>
                  <img src={image} alt={name} />
                </figure>
              </div>
              <div className={classes.listview_details}>
                <div className={classes.name_listView}>
                  <h3> {name} </h3>
                </div>
                <p className={classes.price_listView}>
                  <FormatPrice priceABC={price}></FormatPrice>
                </p>
                {/* <p> {description} </p>  */}
                {/* It will print whole description. */}
                <p className={classes.desript_listView}> {description.slice(0, 90)} </p>

                <NavLink to={`/singleproduct/${id}`}>
                  <button className={classes.btn_listView}> Read More </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
