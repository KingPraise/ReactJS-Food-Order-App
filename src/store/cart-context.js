import React, { Fragment, useState } from "react"; // Import React and specific hooks (Fragment, useState) from the React library

// Create a context object for the cart, providing default values and function placeholders
const CartContext = React.createContext({
  items: [], // Default: an empty array to hold cart items
  totalAmount: 0, // Default: total price is 0
  addItem: (item) => {}, // Placeholder function to add an item to the cart
  removeItem: (id) => {}, // Placeholder function to remove an item by its id
  clearCart: () => {}, // Placeholder function to clear all items from the cart
});

export default CartContext; // Export the CartContext so it can be used in other components