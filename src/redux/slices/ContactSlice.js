import { createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: []};

const contactSlice = createSlice({
    initialState,
    name: "contactStore",
    reducers: {
        addContactAction(state, action) { 
            return { ...state, contacts: [...state.contacts, action.payload] };
        },
        deleteContactAction(state, action) { 
            return { ...state, contacts: state.contacts.filter(contacts => contacts.id !== action.payload)}
        }
    }
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
