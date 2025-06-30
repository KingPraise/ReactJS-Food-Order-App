import React, { useRef, useState } from "react"; // Import React and hooks
import classes from "./MealItemForm.module.css"; // Import CSS module for styling
import Input from "../../UI/Input"; // Import custom Input component

// MealItemForm component receives props from parent
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true); // State to track if entered amount is valid
  const amountInputRef = useRef(); // Ref to access the input element directly

  // Handles form submission
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent default form submission
    const enteredAmount = amountInputRef.current.value; // Get value from input using ref
    const enteredAmountNumber = +enteredAmount; // Convert input value to number

    // Validate input: must not be empty, and must be between 1 and 5
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false); // Set validity state to false if invalid
      return; // Exit function if invalid
    }

    props.onAddToCart(enteredAmountNumber); // Call parent handler with valid amount
    setAmountIsValid(true); // Reset validity state to true
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* Custom Input component for amount, using ref for direct access */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // Unique id for input
          type: "number", // Input type is number
          min: "1", // Minimum value
          max: "5", // Maximum value
          step: "1", // Step value
          defaultValue: "1", // Default value
        }}
      />
      <button type="submit">+ Add</button> {/* Submit button */}
      {/* Show error message if amount is invalid */}
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm; // Export component
