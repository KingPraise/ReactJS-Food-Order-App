import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    // Logic to add item to cart
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: () => {
      // Logic to clear the cart
    },
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
