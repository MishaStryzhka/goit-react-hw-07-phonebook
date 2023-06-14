import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsSlice";

export const reducer = combineReducers({
    contacts: contactsReducer,
})