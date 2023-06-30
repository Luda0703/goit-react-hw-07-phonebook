import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://649de9769bac4a8e669e7228.mockapi.io";

// export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
//   const response = await axios.get("/contacts");
//   return response.data;
// });

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`/contacts`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const addContact = createAsyncThunk (
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.get(`/contacts/${contact}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
)

export const deleteContact = createAsyncThunk (
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        const response = await axios.get(`/contacts/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
)