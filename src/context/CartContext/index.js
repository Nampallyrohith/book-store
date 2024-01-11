import React from "react";

const CartContext = React.createContext({
    cartList: [],
    checkout: false,
    checkoutProcess: () => {},
    addToCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    deleteFromCart: () => {},
    resetCart: () => {},
    cartEmpty: () => {},
})

export default CartContext