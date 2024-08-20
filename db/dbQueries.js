import colorName from 'color-name';
import allProducts from "./data.js";
import allData from './data.js';


const getAllProducts = () => {
    return allProducts;

}

const getAllCategories = () => {
    const categories = [];
    const eachCategoryImage = []
    allProducts.map((product) => {
        if (categories.includes(product.category.toLocaleLowerCase())) {
            return
        }
        categories.push(product.category.toLocaleLowerCase());
        eachCategoryImage.push(product.image[0]);
    })
    return { categories, eachCategoryImage };
}


const productByCategory = (productCategory) => {
    try {
        const products = allProducts.filter((product) => {
            return product.category.toLowerCase() === productCategory.toLowerCase();
        })
        return products
    } catch (error) {
        console.error(error);
    }
}


const getTrendingProducts = () => {
    const trendingProducts = allProducts.filter((product) => {
        return product.ratings > 4.6;
    })
    return trendingProducts;
}


const getProductsByCategory = (categories = []) => {
    if (categories.length === 0) {
        return allProducts;
    }
    const productsBycategory = allProducts.filter((product) => {
        return categories.includes(product.category);
    })
    return productsBycategory;
}

const getProductsByPrice = (minPrice = 0, maxPrice = 0, productsList = []) => {
    const filteredProducts = productsList.filter((product) => {
        const productPrice = parseInt(product.price)
        return productPrice >= minPrice && productPrice <= maxPrice
    })
    return filteredProducts;
}



const getColorName = (hex) => {

    const hexToRgb = (hex) => {
        // Convert hex to RGB
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    };

    const rgbToColorName = (r, g, b) => {
        const closestColor = Object.entries(colorName).reduce((prev, [name, [r2, g2, b2]]) => {
            const dist = Math.sqrt((r - r2) ** 2 + (g - g2) ** 2 + (b - b2) ** 2);
            return dist < prev.dist ? { name, dist } : prev;
        }, { name: 'Unknown', dist: Infinity });

        return closestColor.name;
    };

    const { r, g, b } = hexToRgb(hex);
    return rgbToColorName(r, g, b);
};

const getPopularColors = (productsList) => {
    const colorCount = {};

    productsList.forEach((product) => {
        product.colors.forEach((color) => {
            colorCount[color] = (colorCount[color] || 0) + 1;
        });
    });

    const productsColor = Object.entries(colorCount)
        .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
        .slice(0, 10) // Get top 5 popular colors
        .map(([color]) => ({
            color,
            name: getColorName(color),
        }));

    return productsColor;
};

const getProductsByColor = (color = "", productList = []) => {
    const filteredProducts = productList.filter((product) => {
        return product?.colors.includes(color);
    })

    return filteredProducts
}




export {
    getAllProducts,
    getAllCategories,
    productByCategory,
    getTrendingProducts,
    getProductsByCategory,
    getProductsByPrice,
    getPopularColors,
    getProductsByColor
}