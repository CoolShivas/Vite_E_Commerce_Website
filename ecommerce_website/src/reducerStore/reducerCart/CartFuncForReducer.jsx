

const CartFuncForReducer = (currCartState, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, myColour, amount, productABC } = action.payload;
        console.log(productABC);

        let cartPutItems = {
            id: id + myColour,
            name: productABC.name,
            colors: myColour,
            amount: amount,
            price: productABC.price,
            image: productABC.image[0].url,
            max: productABC.stock,
        };
        return { ...currCartState, cart: [...currCartState.cart, cartPutItems] }

    }


    return currCartState;
}

export default CartFuncForReducer;