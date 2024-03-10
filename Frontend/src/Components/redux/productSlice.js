import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

const initialState = {
  filteredData: [],
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filteredData(state, action) {
      state.filteredData = action.payload.filteredData;
    },
    updateIsLoading(state, action) {
      state.error = action.payload.error;
    },
  },
});

export default productSlice.reducer;

export const filteredData = (formValues) => {
  const { companyName, pincode } = formValues;
  return async (dispatch) => {
    await axiosInstance
      .post(
        `/product/filteredData?pincode=${pincode}&companyName=${companyName}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(
          productSlice.actions.filteredData({
            filteredData: response?.data?.results,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(productSlice.actions.updateIsLoading({ error: true }));
      });
  };
};
