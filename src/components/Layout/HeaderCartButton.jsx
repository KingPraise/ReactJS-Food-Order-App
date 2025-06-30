import React, { useEffect, useState } from "react"; // Import React and hooks for state and side effects
import CartIcon from "../Cart/CartIcon"; // Import the cart icon component
import classes from "./HeaderCartButton.module.css"; // Import CSS module for styling
import { useContext } from "react"; // Import useContext hook
import CartContext from "../../store/cart-context"; // Import the cart context

const HeaderCartButton = (props) => {
  // State to control the highlight animation of the button
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(true);

  // Access the cart context to get cart items
  const cartCtx = useContext(CartContext);

  // Destructure items from the cart context for easier access
  const { items } = cartCtx;

  // Calculate the total number of items in the cart
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount; // Add up the amount of each item
  }, 0);

  // Compute the button's CSS classes, adding a "bump" class if highlighted
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  // useEffect to trigger the highlight animation when cart items change
  useEffect(() => {
    if (items.length === 0) {
      return; // Do nothing if there are no items
    }
    setBtnIsHighLighted(true); // Set highlight to true when items change

    // Set a timer to remove the highlight after 300ms
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    // Cleanup function to clear the timer if effect runs again or component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [items]); // Run effect whenever items change

  return (
    <>
      {/* Button that shows the cart icon, label, and item count */}
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon /> {/* Cart icon */}
        </span>
        <span>Your Cart</span> {/* Button label */}
        <span className={classes.badge}>{numberOfCartItems}</span> {/* Item count badge */}
      </button>
    </>
  );
};

export default HeaderCartButton; // Export the component for use elsewhere
