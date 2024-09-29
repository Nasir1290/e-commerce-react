import { useReducer, useEffect } from "react";
import { initialState, CartReducer } from "../reducers/cartReducer";
import cartContext from "../contexts/cartContext";

// Helper function to load state from localStorage
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("cartState");
  return savedState ? JSON.parse(savedState) : initialState;
};

const CartProvider = ({ children }) => {
  // Initialize state with values from localStorage (or default to initialState)
  const [state, dispatch] = useReducer(
    CartReducer,
    {},
    loadStateFromLocalStorage
  );

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
