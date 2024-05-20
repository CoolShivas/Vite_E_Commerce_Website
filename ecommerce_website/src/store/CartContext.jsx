import React, { Children, createContext } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const additionToCart = (id, myColour, amount, productABC) => {

    };

    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

export default CartContext;