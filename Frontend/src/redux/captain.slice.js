import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { captainCall, captainLoginCall } from "../apis/CaptainManage.api";
import axios from "axios";
// Thunk for posting user data
export const captainThunk = createAsyncThunk("post-CaptainData",
  async (CaptainData, { rejectWithValue }) => {
    try {
      const result = await captainCall(CaptainData);
      return result;  // Make sure to return the result to be used in the fulfilled case
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);  // Fix typo from `massage` to `message`
    }
  }
);

export const captianLoginThunk = createAsyncThunk("login-userData",
  async (CaptainData, { rejectWithValue }) => {  
    try {
      const result = await captainLoginCall(CaptainData);
      return result;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);
export const logoutCaptainThunk = createAsyncThunk('captains/logout',
   async (_, { rejectWithValue }) => {
  try {
      const token = localStorage.getItem('token');

      if (!token) {
          throw new Error("No token found, user might already be logged out");
      }

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
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


const captainSlice = createSlice({
  name: "Captain",
  initialState: {
    captainData: [],  // Correct the state key to 'usersData'
    loading: false,
    error: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(captainThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(captainThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.captainData = action.payload;  // Fix the key to 'usersData'
      })
      .addCase(captainThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;  // Store error message if rejection occurs
      });


        // login thunk
        builder.addCase(captianLoginThunk.pending, (state) => {
          state.loading = true;
      })
      builder.addCase(captianLoginThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.usersData = action.payload
      })
      builder.addCase(captianLoginThunk.rejected, (state) => {
          state.loading = true;

      });

      // logout thunk

      builder.addCase(logoutCaptainThunk.pending, (state) => {
        state.loading = true; 
    });
    builder.addCase(logoutCaptainThunk.fulfilled, (state) => {
        state.loading = false;
        state.usersData = [];
        state.token = null;
    }); 
    builder.addCase(logoutCaptainThunk.rejected, (state) => {
        state.loading = true;
    }); 
  },
});

export default captainSlice.reducer;