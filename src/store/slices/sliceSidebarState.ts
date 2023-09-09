import { createSlice } from "@reduxjs/toolkit";

const sliceSidebarState = createSlice({
    name: 'sidebarState',
    initialState: true,
    reducers: {
        changeSidebarState(state, action) {
            return action.payload;
        }
    }
});

export default sliceSidebarState.reducer;

export const { changeSidebarState } = sliceSidebarState.actions;
export const useSidebarState = (state: any) => {
    return state.sidebarState as boolean;
}