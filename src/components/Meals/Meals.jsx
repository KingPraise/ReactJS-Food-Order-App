// Importing React and Fragment from the react library
import React, { Fragment } from "react";
// Importing the MealsSummary component from the current directory
import MealsSummary from "./MealsSummary";
// Importing the AvailableMeals component from the current directory
import AvailableMeals from "./AvailableMeals";

// Define the Meals functional component
const Meals = () => {
  return (
    // Fragment is used to group multiple elements without adding extra nodes to the DOM
    <Fragment>
      {/* Render the MealsSummary component */}
      <MealsSummary />
      {/* Render the AvailableMeals component */}
      <AvailableMeals />
    </Fragment>
  );
};

// Export the Meals component as the default export
export default Meals;
