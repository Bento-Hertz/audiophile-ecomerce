import { createSlice } from "@reduxjs/toolkit";
import ICartProduct from "interfaces/ICartProduct";

const INITIAL_STATE: ICartProduct[] = [];

const sliceCartProducts = createSlice({
    name: 'cartProducts',
    initialState: INITIAL_STATE,
    reducers: {
        addProductToCart(state, action) {
            return [...state, action.payload];
        },
        removeProductFromCart(state, action) {
            return state.filter(st => st.product.id !== action.payload);
        },
        removeAllProductsFromCart(state, action) {
            return state.filter(st => st.product.id === action.payload);
        },
        changeProductQuantity(state, action) {
            return state.map(st => st.product.id === action.payload.id ? {...st, quantity: action.payload.counter} : st);
        }
    }
});

export default sliceCartProducts.reducer;

export const { addProductToCart, removeProductFromCart, removeAllProductsFromCart, changeProductQuantity } = sliceCartProducts.actions;
export const useCartProducts = (state: any) => {
    return state.cartProducts as ICartProduct[];
}