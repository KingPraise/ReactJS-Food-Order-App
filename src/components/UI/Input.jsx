import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        className={classes.input}
        id={props.input.id}
        {...props.input} // Spread the input props to allow for flexibility
      />
      {props.error && <p className={classes.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
