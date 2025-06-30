import React from "react"; // Import React library
import classes from "./Input.module.css"; // Import CSS module for styling

// Define Input component using React.forwardRef to forward refs to the input element
const Input = React.forwardRef((props, ref) => {
  return (
    // Container div with combined CSS classes (component style + optional custom class)
    <div className={`${classes.input} ${props.className}`}>
      {/* Label for the input, using the id from props.input */}
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref} // Forwarded ref for parent access
        className={classes.input} // Apply input-specific CSS class
        id={props.input.id} // Set input id for accessibility
        {...props.input} // Spread all input-related props (type, value, etc.)
      />
    </div>
  );
});

export default Input; // Export the Input component for use in other files
