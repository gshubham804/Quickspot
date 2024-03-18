import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

const initialState = {
  cardData: [],
  filteredData: [],
  error: false,
  productDetailsData: {},
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
    updateCardData(state, action) {
      state.cardData = action.payload.cardData;
    },
    updateProductDetailsData(state, action) {
      state.productDetailsData = action.payload.productDetailsData;
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

export const getProductData = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/product/getProductData", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(
        productSlice.actions.updateCardData({
          cardData: response?.data?.data,
        })
      );
    } catch (error) {
      console.error("Error fetching product data:", error);
      dispatch(productSlice.actions.updateIsLoading({ error: true }));
    }
  };
};

export const getProductDetailsData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/product/getProductDetailsData?id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(
        productSlice.actions.updateProductDetailsData({
          productDetailsData: response?.data?.data,
        })
      );
    } catch (error) {
      console.error("Error fetching product data:", error);
      dispatch(productSlice.actions.updateIsLoading({ error: true }));
    }
  };
};
