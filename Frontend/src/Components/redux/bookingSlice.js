import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

const initialState = {
  bookingDetailsOfUser: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateBookingDetailsOfUser(state, action) {
      state.bookingDetailsOfUser = action.payload.bookingDetailsData;
    },
  },
});

export default bookingSlice.reducer;

export const savebookingDetailsOfUser = ({
  userId,
  from,
  to,
  date,
  companyId,
  zoneNumber,
  SlotNumbers,
  companyName,
}) => {
  return async () => {
    try {
      await axiosInstance.post("/booking/booktheparkingslot",
        {
          userId,
          from,
          to,
          date,
          companyId,
          zoneNumber,
          SlotNumbers,
          companyName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
};
