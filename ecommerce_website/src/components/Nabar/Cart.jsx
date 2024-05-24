import { useAddTocartCustomHook } from "../../store/CartContext"


const Cart = () => {

    const { cart } = useAddTocartCustomHook();
    console.log(cart);

    return <h2> This is a cart page. </h2>
}

export default Cart