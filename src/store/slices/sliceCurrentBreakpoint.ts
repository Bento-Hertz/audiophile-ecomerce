import { createSlice } from '@reduxjs/toolkit';

const sliceCurrentBreakpoint = createSlice({
    name: 'currentBreakpoint',
    initialState: '',
    reducers: {
        changeCurrentBreakpoint(state, action) {
            return action.payload;
        }
    }
});

export default sliceCurrentBreakpoint.reducer;

export const { changeCurrentBreakpoint } = sliceCurrentBreakpoint.actions;
export const useCurrentBreakpoint = (state: any) => {
    return state.currentBreakpoint as string;
}