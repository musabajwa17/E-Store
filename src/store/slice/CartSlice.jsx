/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const initialState = {
  //get the items from localstorage of the key set in setItems as "cartItems" and set them in cartitems and convert them in javascript
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //we are checking if the item is already in the cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //we are checking if the item is already in the cart we will increase the quantity of the item
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`${action.payload.productTitle} quntity is increased`, {
          position: "bottom-left",
        });
      }
      // if it's new item then we will add it to the cartItem array
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.productTitle} added to the cart`, {
          position: "bottom-left",
        });
      }
      //set items in localstorage with key and convert the data into string with stringify
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-left",
      });
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.success("Cart is cleared", {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info (`${action.payload.name} cart Quantity is Decreased`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action){
      console.log("Cart Total")
      //reduce array methods accepts two parameters first is callback function and sectond is initial value 
      //cartTotal will hold the initial values of total and quantity
      //cartItem will be the item which we will give each time of iteration
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        //this is callback function
        //destructure the price and cartQuantity from cartItem
        const { price, cartQuantity } = cartItem
        //itemTotal will store the total amount each of the item
        const itemTotal = price * cartQuantity // we will multiply the price of the item to the quantity of the item
        cartTotal.total += itemTotal  
        //get total from cartTotal because the cartTotal will have the initial value of the total and we just add the total to the itemTotal for each time iteration
        cartTotal.quantity += cartQuantity
        return cartTotal;
      }, {
        //these two are the initial values
        total: 0,
        quantity: 0
      });
      //assigning the total and quantity to the values in the state
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseCart, increaseCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
