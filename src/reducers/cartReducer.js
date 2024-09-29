const initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart": {
      const newProduct = action.product;
      return [...state, newProduct];
    }

    case "removeFromCart": {
      const newProductList = state.filter(
        (product) => product.id !== action.id
      );
      return [...newProductList];
    }

    case "removeAllProducts": {
      return initialState;
    }

    default:
      return state;
  }
};

export { CartReducer, initialState };
