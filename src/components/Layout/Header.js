import { Fragment } from "react";
import mealsImage from "../../assets/logo.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button onClick={props.onShowCart}>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Logo" />
      </div>
    </Fragment>
  );
};

export default Header;
