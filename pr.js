const initialState = {
    products: [],
    filters: {
        categories: ["sofa","new"],
        minPrice: 0,
        maxPrice: 0,
        colors: []
    }
};

console.log({...initialState.filters.categories})