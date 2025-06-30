import React from "react"; // Import React library
import classes from "./Cart.module.css"; // Import CSS module for styling
import Modal from "../UI/Modal"; // Import Modal component for displaying the cart as a modal
import { useContext } from "react"; // Import useContext hook from React
import CartItem from "./CartItem"; // Import CartItem component for each item in the cart
import CartContext from "../../store/cart-context"; // Import CartContext to access cart state

const Cart = (props) => {
  const cartCtx = useContext(CartContext); // Get cart context to access cart data and methods

  // Calculate and format the total amount to two decimal places
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Handler to remove an item from the cart by id
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Handler to add one more of an item to the cart
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // Check if there are any items in the cart
  const hasItems = cartCtx.items.length > 0;

  // Generate a list of CartItem components for each item in the cart
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id} // Unique key for each item
          name={item.name} // Item name
          amount={item.amount} // Item quantity
          price={item.price} // Item price
          onRemove={cartItemRemoveHandler.bind(null, item.id)} // Handler for removing item
          onAdd={cartItemAddHandler.bind(null, item)} // Handler for adding item
        />
      ))}
    </ul>
  );

  // Render the cart modal with items, total amount, and action buttons
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart; // Export the Cart component as default
