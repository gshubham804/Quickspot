// alertSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideAlert: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
