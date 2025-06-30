import React from "react"; // Import React library
import classes from "./MealItem.module.css"; // Import CSS module for styling
import MealItemForm from "./MealItemForm"; // Import MealItemForm component
import { useContext } from "react"; // Import useContext hook from React
import CartContext from "../../../store/cart-context"; // Import CartContext for cart state management

// MealItem component receives props for meal details
const MealItem = (props) => {
  const cartCtx = useContext(CartContext); // Access cart context to interact with cart state

  // Format the price to two decimal places and prepend with '$'
  const price = `$${props.price.toFixed(2)}`;

  // Handler to add the meal item to the cart with the specified amount
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id, // Meal ID
      name: props.name, // Meal name
      amount: amount, // Amount to add
      price: props.price, // Meal price
    });
  };

  // Render the meal item with its details and the form to add to cart
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3> {/* Display meal name */}
        <div className={classes.description}>{props.description}</div> {/* Display meal description */}
        <div className={classes.price}>{price}</div> {/* Display formatted price */}
      </div>
      <div>
        {/* Render MealItemForm and pass id and addToCart handler as props */}
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem; // Export MealItem component as default
