import { createSlice } from "@reduxjs/toolkit";

const sliceCartState = createSlice({
    name: 'cartState',
    initialState: true,
    reducers: {
        changeCartState(state, action) {
            return action.payload;
        }
    }
});

export default sliceCartState.reducer;

export const { changeCartState } = sliceCartState.actions;
export const useCartState = (state: any) => {
    return state.cartState as boolean;
}