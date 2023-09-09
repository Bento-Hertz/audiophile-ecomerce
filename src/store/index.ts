import { configureStore } from "@reduxjs/toolkit";
import sliceCurrentBreakpoint from "./slices/sliceCurrentBreakpoint";
import sliceSidebarState from "./slices/sliceSidebarState";

const store = configureStore({
    reducer: {
        currentBreakpoint: sliceCurrentBreakpoint,
        sidebarState: sliceSidebarState
    }
});

export default store;