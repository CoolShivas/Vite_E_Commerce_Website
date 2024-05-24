import classes from "./Cart.module.css";
import { useAddTocartCustomHook } from "../../store/CartContext"
import CartItems from "./CartItems";


const Cart = () => {

    const { cart } = useAddTocartCustomHook();
    console.log(cart);

    return <>

        <div className={classes.cart_container}>
            <div className={classes.cart_grid__five}>
                <p> Items </p>
                <p> Price </p>
                <p> Quantity </p>
                <p> Subtotal </p>
                <p> Remove </p>
            </div>
            <hr />

            <div className="mapping_div">
                {cart.map((currElem) => {
                    return <CartItems key={currElem.id} {...currElem} > </CartItems>
                    // // Here, {...currElem} this is passing as props to Cartitems component where you can destructure it;
                })}
            </div>
        </div>

    </>
}

export default Cart