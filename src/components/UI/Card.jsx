// Import the React library to use JSX and React features
import React from "react";
// Import CSS module styles for the Card component
import classes from "./Card.module.css";

// Define the Card functional component, accepting props as argument
const Card = (props) => {
  // Render a div with the card styling, and render any child components or elements passed to Card
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  );
};

// Export the Card component as the default export of this file
export default Card;
