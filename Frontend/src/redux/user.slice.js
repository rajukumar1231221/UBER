import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userCall, userLoginCall } from "../apis/manage.api";
import axios from "axios";

// Thunk for posting user data
export const userThunk = createAsyncThunk("post-userData",
  async (newUser, { rejectWithValue }) => {
    try {
      const result = await userCall(newUser);
      return result;  // Make sure to return the result to be used in the fulfilled case
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);  // Fix typo from `massage` to `message`
    }
  }
);

export const userLoginThunk = createAsyncThunk("login-userData",
  async (UserLoginData, { rejectWithValue }) => {  
    try {
      const result = await userLoginCall(UserLoginData);
      return result;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);
export const logoutUserThunk = createAsyncThunk('user/logout',
   async (_, { rejectWithValue }) => {
  try {
      const token = localStorage.getItem('token');

      if (!token) {
          throw new Error("No token found, user might already be logged out");
      }

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });

      if (response.status === 200) {
          localStorage.removeItem("token"); // Clear token from localStorage
          return response.data;
      }
  } catch (error) {
      return rejectWithValue(error.response?.data || "Logout failed");
  }
});


const userSlice = createSlice({
  name: "users",
  initialState: {
    usersData: [],  // Correct the state key to 'usersData'
    loading: false,
    error: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(userThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.usersData = action.payload;  // Fix the key to 'usersData'
      })
      .addCase(userThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;  // Store error message if rejection occurs
      });

      // login user

        // login thunk
        builder.addCase(userLoginThunk.pending, (state) => {
          state.loading = true;
      })
      builder.addCase(userLoginThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.usersData = action.payload
      })
      builder.addCase(userLoginThunk.rejected, (state) => {
          state.loading = true;

      });

      // logout thunk

      builder.addCase(logoutUserThunk.pending, (state) => {
        state.loading = true; 
    });
    builder.addCase(logoutUserThunk.fulfilled, (state) => {
        state.loading = false;
        state.usersData = [];
        state.token = null;
    }); 
    builder.addCase(logoutUserThunk.rejected, (state) => {
        state.loading = true;
    }); 
  },
});

export default userSlice.reducer;