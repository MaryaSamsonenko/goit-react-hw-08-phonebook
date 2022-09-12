import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance, token } from "../../services/api";

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error("We already have a user with such email!");
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error("Login or password were rejected!");
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/users/logout");
      token.unset();
    } catch (error) {
      toast.error("Something went wrong, please try again");
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Token doesn`t exist");
    }

    token.set(persistedToken);
    try {
      const { data } = await axiosInstance.get("/users/current");
      return data;
    } catch (error) {
      toast.error("Something went wrong, please try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
