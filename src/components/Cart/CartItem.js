// Import CSS module for styling
import classes from './CartItem.module.css';

// Functional component definition for CartItem
const CartItem = (props) => {
  // Format the price to two decimal places and prepend a dollar sign
  const price = `$${props.price.toFixed(2)}`;

  return (
    // Render a list item with a specific CSS class
    <li className={classes['cart-item']}>
      <div>
        {/* Display the name of the cart item */}
        <h2>{props.name}</h2>
        {/* Summary section for price and amount */}
        <div className={classes.summary}>
          {/* Display the formatted price */}
          <span className={classes.price}>{price}</span>
          {/* Display the quantity of the item */}
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      {/* Actions section with add and remove buttons */}
      <div className={classes.actions}>
        {/* Button to remove an item, calls onRemove handler */}
        <button onClick={props.onRemove}>−</button>
        {/* Button to add an item, calls onAdd handler */}
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

// Export the CartItem component as default
export default CartItem;
