// Import the React library to use JSX and React features
import React from "react";
// Import CSS module styles for scoped styling
import classes from "./MealsSummary.module.css";

// Define the MealsSummary functional component
const MealsSummary = () => {
  // Return the JSX to render the summary section
  return (
    // Use a React fragment instead of a div to avoid unnecessary DOM nodes
    <>
      {/* Section containing the summary content, styled with CSS module */}
      <section className={classes.summary}>
        {/* Heading for the summary */}
        <h2>Delicious Food, Delivered To You</h2>
        {/* First paragraph describing the service */}
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        {/* Second paragraph with more details */}
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </>
  );
};

// Export the MealsSummary component as the default export
export default MealsSummary;
