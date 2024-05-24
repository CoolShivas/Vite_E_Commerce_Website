import CartAmtToggle from "../Bucket/CartAmtToggle";
import FormatPrice from "../../reducerStore/FormatPrice";
import classes from "./CartItems.module.css";

const CartItems = ({ id, name, image, colors, price, amount }) => {

    return (
        <>
            <div className={classes.cartItems_container}>
                <div className={classes.grid_five_cartItems}>
                    <div className={classes.cart_image__name}>
                        <div className={classes.image_and_name}>
                            <figure>
                                <img src={image}
                                    alt={id} />
                            </figure>
                            <div className={classes.cart_colors__div}>
                                <p> {name} </p>
                                <div className={classes.color_style}>
                                    <p> color :  </p>
                                    <div className={classes.color_display}
                                        style={{ background: colors, color: colors }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.cart_price__div}>
                        <p> <FormatPrice priceABC={price}></FormatPrice> </p>
                    </div>
                    <div className={classes.cart_amount__div}>
                        <CartAmtToggle
                            amountABC={amount}
                        // setDecreaseABC={setDecrease}
                        // setIncreaseABC={setIncrease}
                        ></CartAmtToggle>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems;