import React, { useState } from "react"; // Import React and the useState hook for state management
import Header from "./components/Layout/Header"; // Import the Header component
import Meals from "./components/Meals/Meals"; // Import the Meals component
import Cart from "./components/Cart/Cart"; // Import the Cart component
import CartProvider from "./store/CartProvider"; // Import the CartProvider context provider

function App() { // Define the main App component
  const [cartIsShown, setCartIsShown] = useState(false); // State to track if the cart modal is visible

  const showCartHandler = () => { // Function to show the cart modal
    setCartIsShown(true); // Set cartIsShown to true
  };

  const hideCartHandler = () => { // Function to hide the cart modal
    setCartIsShown(false); // Set cartIsShown to false
  };

  return (
    <CartProvider> {/* Provide cart context to all child components */}
      {cartIsShown && <Cart onClose={hideCartHandler}/>} {/* Conditionally render Cart modal if cartIsShown is true */}
      <Header onShowCart={showCartHandler} /> {/* Render Header and pass showCartHandler as a prop */}
      <main>
        <Meals /> {/* Render Meals component inside the main section */}
      </main>
    </CartProvider>
  );
}

export default App; // Export the App component as the default export