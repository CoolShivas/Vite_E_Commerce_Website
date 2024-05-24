import classes from "./Cart.module.css";
import { useAddTocartCustomHook } from "../../store/CartContext"


const Cart = () => {

    const { cart } = useAddTocartCustomHook();
    console.log(cart);

    return <>

        <div className={classes.cart_container}>
            <div className={classes.cart_grid__five}>
                <p> Items </p>
                <p> Price </p>
                <p> Quantity </p>
                <p> Remove </p>
            </div>
            <hr />

        </div>

    </>
}

export default Cart