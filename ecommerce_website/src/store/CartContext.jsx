import CartFuncForReducer from '../reducerStore/reducerCart/CartFuncForReducer';
import React, { createContext, useReducer, useContext } from 'react'

const CartContext = createContext();

const addToCartInitialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};

export const CartProvider = ({ children }) => {

    const [newCartState, dispatchCartData] = useReducer(CartFuncForReducer, addToCartInitialState);

    const additionToCart = (id, myColour, amount, productABC) => {
        dispatchCartData({
            type: "ADD_TO_CART",
            payload: (id, myColour, amount, productABC)
        })
    };

    return <CartContext.Provider value={
        {
            ...newCartState,
            additionToCart,
        }
    }>
        {children}
    </CartContext.Provider>
}



export const useAddTocartCustomHook = () => {
    return useContext(CartContext);
};


export default CartContext;