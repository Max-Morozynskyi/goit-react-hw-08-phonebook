import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      alert(error.response.errors.join(". "));
      // return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const createContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      alert(error.response.errors.join(". "));
      // return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      alert(error.response.errors.join(". "));
      // return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (data, thunkAPI) => {
    const { contactId, name, number } = data;
    try {
      const response = await axios.patch(`/contacts/${contactId}`, { name, number });
      return response.data;
    } catch (error) {
      alert(error.response.errors.join(". "));
      // return thunkAPI.rejectWithValue(error.message)
    }
  }
)