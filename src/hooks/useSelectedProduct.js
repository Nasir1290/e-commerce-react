import { useContext } from "react";
import { selectedProductContext } from "../contexts/selectedProductContext";

const useSelectedProduct = () => {
    return useContext(selectedProductContext);
}
export {useSelectedProduct}