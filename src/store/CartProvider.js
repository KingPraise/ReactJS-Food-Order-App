import { useReducer } from "react"; // Import useReducer hook from React
import CartContext from "./cart-context"; // Import the CartContext object

// Define the default state for the cart
const defaultCartState = {
  items: [], // Cart starts with no items
  totalAmount: 0, // Cart starts with total amount 0
};

// Reducer function to manage cart state based on dispatched actions
const cartReducer = (state, action) => {
  // Handle adding an item to the cart
  if (action.type === "ADD_ITEM") {
    // Calculate new total amount after adding item(s)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // Find if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    let updatedItem;
    if (existingCartItem) {
      // If item exists, update its amount
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; // Copy current items
      updatedItems[existingCartItemIndex] = updatedItem; // Replace with updated item
    } else {
      // If item does not exist, add it to the cart
      updatedItem = { ...action.item, amount: action.item.amount };
      updatedItems = state.items.concat(action.item); // Add new item to items array
    }

    // Return updated state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // Handle removing an item from the cart
  if (action.type === "REMOVE_ITEM") {
    // Find the item to remove
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // Subtract item's price from total amount
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      // If only one left, remove item from cart
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // Otherwise, decrease the amount by 1
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items]; // Copy current items
      updatedItems[existingCartItemIndex] = updatedItem; // Replace with updated item
    }

    // Return updated state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // Return default state for any other action
  return defaultCartState; // Placeholder for reducer logic
};

// CartProvider component to provide cart context to children components
const CartProvider = (props) => {
  // useReducer hook to manage cart state and dispatch actions
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // Handler to dispatch add item action
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  // Handler to dispatch remove item action
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  // Define the context value to be provided
  const cartContext = {
    items: cartState.items, // Current cart items
    totalAmount: cartState.totalAmount, // Current total amount
    addItem: addItemToCartHandler, // Function to add item
    removeItem: removeItemFromCartHandler, // Function to remove item
    clearCart: () => {
      // Logic to clear the cart (not implemented)
    },
  };
  // Provide the cart context to child components
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider; // Export the CartProvider component
