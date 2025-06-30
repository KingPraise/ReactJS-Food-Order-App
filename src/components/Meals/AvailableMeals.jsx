// Import the React library to use JSX and React features
import React from "react";
// Import CSS module styles for this component
import classes from "./AvailableMeals.module.css";
// Import the Card UI component for layout styling
import Card from "../UI/Card";
// Import the MealItem component to display individual meal details
import MealItem from "./MealItem/MealItem";

// Define a constant array of dummy meal data
const DUMMY_MEALS = [
  {
    id: "m1", // Unique identifier for the meal
    name: "Sushi", // Name of the meal
    description: "Finest fish and veggies", // Description of the meal
    price: 22.99, // Price of the meal
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

// Define the AvailableMeals functional component
const AvailableMeals = () => {
  // Map over DUMMY_MEALS to create an array of MealItem components
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id} // Unique key prop for each list item
      id={meal.id} // Pass meal id as prop
      name={meal.name} // Pass meal name as prop
      description={meal.description} // Pass meal description as prop
      price={meal.price} // Pass meal price as prop
    />
  ));

  // Render the meals list inside a styled section and Card component
  return (
    <section className={classes.meals}>
      {/* Card component wraps the list for styling */}
      <Card>
        {/* Render the list of MealItem components inside an unordered list */}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

// Export the AvailableMeals component as the default export
export default AvailableMeals;
