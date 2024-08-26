import { getAllProducts, getProductsByFilters } from "../../db/dbQueries.js";
import actions from "../actions";

const initialState = {
    products: [],
    filters: {
        categories: [],
        minPrice: 0,
        maxPrice: 0,
        colors: []
    }
};

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.products.LOAD_ALL_PRODUCTS: {
            return {
                ...state,
                products: getAllProducts(),
            };
        }

        case actions.products.FILTER_PRODUCTS: {
            // Calculate updated filters first and then pass it to the functon
            const updatedFilters = {
                ...state.filters,
                // if the field is undefined that means we not set it from dispatch , in this case we set it just it's previous state value otherwise if it's not undefined then set incoming value !!
                categories: action.categories !== undefined ? action.categories : state.filters.categories,
                minPrice: action.minPrice !== undefined ? action.minPrice : state.filters.minPrice,
                maxPrice: action.maxPrice !== undefined ? action.maxPrice : state.filters.maxPrice,
                colors: action.colors !== undefined ? action.colors : state.filters.colors,
            };

            return {
                ...state,
                filters: updatedFilters,
                products: getProductsByFilters(updatedFilters)
            };
        }

        case actions.products.RESET_ALL_FILTERS: {
            return {
                ...state,
                products: getAllProducts(),
                filters: {
                    categories: [],
                    minPrice: 0,
                    maxPrice: 0,
                    colors: []
                }
            }
        }

        default:
            return state;
    }
};

export { ProductsReducer, initialState };
