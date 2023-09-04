import { configureStore } from "@reduxjs/toolkit";
import sliceCurrentBreakpoint from "./slices/sliceCurrentBreakpoint";

const store = configureStore({
    reducer: {
        currentBreakpoint: sliceCurrentBreakpoint
    }
});

export default store;