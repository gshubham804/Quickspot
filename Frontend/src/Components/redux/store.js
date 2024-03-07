import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    productData:productReducer,
  },
});

export default store;
