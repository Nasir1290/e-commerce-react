import cartContext from "../contexts/cartContext";
import { useContext } from "react";

const useCart = () => {
  return useContext(cartContext);
};

export default useCart;
