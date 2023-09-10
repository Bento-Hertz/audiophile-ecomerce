import { configureStore } from "@reduxjs/toolkit";
import sliceCurrentBreakpoint from "./slices/sliceCurrentBreakpoint";
import sliceSidebarState from "./slices/sliceSidebarState";
import sliceCartState from "./slices/sliceCartState";
import sliceCartProducts from "./slices/sliceCartProducts";

const store = configureStore({
    reducer: {
        currentBreakpoint: sliceCurrentBreakpoint,
        sidebarState: sliceSidebarState,
        cartState: sliceCartState,
        cartProducts: sliceCartProducts
    }
});

export default store;