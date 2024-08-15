import { createSlice } from "@reduxjs/toolkit";

export interface ContactProps {
  id: string;
  imageSrc?: string;
  name: string;
  status: "active" | "inactive";
  email: string;
  number: string;
}

type ContactsProps = ContactProps[];

const initialState: ContactsProps = [
  {
    id: "1",
    name: "John Doe",
    status: "active",
    email: "johndoe@example.com",
    number: "+919876543210",
  },
  {
    id: "2",
    name: "Jane Smith",
    status: "inactive",
    email: "janesmith@example.com",
    number: "+919765432109",
  },
  {
    id: "3",
    name: "Alice Johnson",
    status: "active",
    email: "alice.johnson@example.com",
    number: "+919654321098",
  },
];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    updateContact: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
