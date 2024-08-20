import { useContext } from "react";
import ProductsContext from "../contexts/productContext";

const useProduct = () => {
    return useContext(ProductsContext);
}

export default useProduct;