import actions from "../actions"


const initialState = {
    products: [],
    filters: {
        category: [],
        minPrice: 0,
        maxPrice: 0,
        color: []
    }
}

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case actions.products.LOAD_ALL_PRODUCTS: {
            return {
                ...state,
                products: action.data,
                filters:{...state.filters}
            }
        }

        case actions.products.FILTER_BY_CATEGORY: {
            return {
                ...state,
                products: action.data,
                filters: {
                    ...state.filters,
                    category: action.category, // Store the selected categories in the state
                },
            }
        }

        case actions.products.FILTER_BY_PRICE_RANGE: {
            return {
                ...state,
                products: action.data,
                filters: {
                    ...state.filters,
                    minPrice: action.minPrice,
                    maxPrice: action.maxPrice,
                }
            }
        }

        case actions.products.FILTER_BY_COLOR: {
            return {
                ...state,
                products: action.data,
                filters: {
                    ...state.filters,
                    color: [action.color],
                }
            }
        }

    }
}

export { ProductsReducer, initialState }