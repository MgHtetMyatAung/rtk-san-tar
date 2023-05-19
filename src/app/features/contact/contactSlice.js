import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        data: [],
        total: null,
    },
    reducers: {
        getAllContacts: (state, { payload }) => {
            state.data = payload;
        },
        getAllContactsTotal: (state, { payload }) => {
            state.total = payload;
        }
    }
});

export const { getAllContacts,getAllContactsTotal } = contactSlice.actions;
export default contactSlice.reducer;