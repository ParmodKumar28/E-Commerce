// Import's
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js"

// Creating Shop context here
export const ShopContext = createContext(null);

// Function to get default cart product key value pairs like product id with added into cart
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

// Context provider
const ShopContextProvider = (props) => {
    // State's
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add a item in a cart by it's id
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }

    // Function to remove item from a cart by it's id
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // Function to get total amount in cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                console.log(itemInfo);
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Function to get total item's in cart 
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // Context value to provide to consumer's
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }

    // Returning JSX here providing shop context value to all children component's
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

// Exporting ShopContextProvider component
export default ShopContextProvider;