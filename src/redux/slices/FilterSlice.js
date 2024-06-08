import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" };

const filterSlice = createSlice({
    initialState,
    name: "filterStore",
    reducers: {
        filterContactAction(state, action) { 
            return {...state, filter: action.payload}
        }
    }
});

export const { filterContactAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;