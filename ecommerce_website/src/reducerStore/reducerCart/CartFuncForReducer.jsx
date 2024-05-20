

const CartFuncForReducer = (currCartState, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, myColour, amount, productABC } = action.payload;
        console.log(productABC);
    }
    return currCartState;
}

export default CartFuncForReducer;