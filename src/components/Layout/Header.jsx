// Import Fragment to group elements without adding extra nodes to the DOM
import { Fragment } from "react";
// Import the image to be used in the header
import mealsImage from "../../assets/meals.jpg";
// Import CSS module for scoped styling
import classes from "./Header.module.css";
// Import the cart button component
import HeaderCartButton from "./HeaderCartButton";

// Header component definition, receives props from parent
const Header = (props) => {
  return (
    // Use Fragment to wrap multiple elements
    <Fragment>
      {/* Header section with styling */}
      <header className={classes.header}>
        {/* App title */}
        <h1>ReactMeals</h1>
        {/* Cart button, triggers onShowCart when clicked */}
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      {/* Container for the main image with styling */}
      <div className={classes["main-image"]}>
        {/* Display the meals image with alt text */}
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

// Export the Header component as default
export default Header;
