import LoaderSpinner from "./LoaderSpinner";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import FormatPrice from "../../reducerStore/FormatPrice";
import classes from "./SingleProduct.module.css";
import ImgPicture from "../Ui/ImgPicture";
import PageNavigation from "../Navigation/PageNavigation";
import { useParams } from "react-router-dom";
import { formationOfCustomHook } from "../../store/AppContext";
import { useEffect } from "react";

// const API2 = "https://api.pujakaitem.com/api/products?id=thapaseialnoa";

const API2 = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);// // Here, useParams give the specific id data that we have selected;

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
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API2}?id=${id}`);// Here, API2 is the data and id is the specific data that we want;
  }, []);

  if (isSingleLoading) {
    return (
      <div>
        <LoaderSpinner></LoaderSpinner>
      </div>
    );
  }

  return (
    <>
      <div>
        <PageNavigation titleNavigator={name}></PageNavigation>
        <div className={classes.container_single__product}>
          <div className={classes.grid_two__column}>
            {/* Product Images */}
            <div className="product_images">
              <ImgPicture picture={image}></ImgPicture>
            </div>

            {/* Product data */}
            <div className={classes.product_data}>
              <h2> {name} </h2>
              <p> {stars} </p>
              <p> {reviews} reviews </p>
              {/* Product Price*/}
              <p className="product_data__price">
                MRP:
                <del>
                  <FormatPrice priceABC={price + 2500000}></FormatPrice>
                </del>
              </p>
              <p className="product_data__realPrice">
                Deal of the Day : <FormatPrice priceABC={price}></FormatPrice>
              </p>
              <p> {description} </p>
              {/* Products Icons */}
              <div className={classes.product_data__warranty}>
                <div className={classes.product_warranty__data}>
                  <TbTruckDelivery className={classes.warranty_icon} />
                  <p> Free Delivery </p>
                </div>

                <div className={classes.product_warranty__data}>
                  <TbReplace className={classes.warranty_icon} />
                  <p> 30 Days Replacement </p>
                </div>

                <div className={classes.product_warranty__data}>
                  <TbTruckDelivery className={classes.warranty_icon} />
                  <p> Deliverd By </p>
                </div>

                <div className={classes.product_warranty__data}>
                  <MdSecurity className={classes.warranty_icon} />
                  <p> Year Warranty </p>
                </div>
              </div>
              {/* Product Data Information */}
              <div className={classes.product_data__info}>
                <p>
                  Available :
                  <span> {stock > 0 ? "In Stock" : "Not Available"} </span>
                </p>
                <p>
                  ID : <span> {id} </span>
                </p>
                <p>
                  Brand : <span> {company} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
