import { addContact, fetchContacts, removeContact } from "redux/operations";

const { createSlice } = require("@reduxjs/toolkit");

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        isLoadingPost: false,
        isLoadingRemoveContact: false,
        error: null
      },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchContacts.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        
        .addCase(addContact.pending, (state)=>{
            state.isLoadingPost = true;
        })
        .addCase(addContact.fulfilled, (state, action)=>{
            state.isLoadingPost = false;
            state.error = null;
            state.contacts.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action)=>{
            state.isLoadingPost = false;
            state.error = action.payload;
        })
        // .addCase(removeContact.pending, (state)=>{
        //     state.isLoadingRemoveContact = true;
        // })
        .addCase(removeContact.fulfilled, (state, action)=>{
            // state.isLoadingRemoveContact = false;
            state.error = null;
            const index = state.contacts.findIndex(
                task => task.id === action.payload.id
              );
              state.contacts.splice(index, 1);
        })
        .addCase(removeContact.rejected, (state, action)=>{
            // state.isLoadingRemoveContact = false;
            state.error = action.payload;
        })
    },

});

export const contactsReducer = contactsSlice.reducer;