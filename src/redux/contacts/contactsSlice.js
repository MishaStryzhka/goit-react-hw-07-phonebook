const { createSlice, nanoid } = require("@reduxjs/toolkit");

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContacts: {
            reducer(state, action) { return [...state, action.payload] },
            prepare(user) {
                return {
                    payload: {
                        id: nanoid(),
                        ...user
                    }
                };
            },
        },
        deleteContacts: {
            reducer(state, action) { return state.filter(contact => contact.id !== action.payload) },
        }

    }

});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;