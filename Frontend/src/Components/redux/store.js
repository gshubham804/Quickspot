// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import alertReducer from "./alertSlice";
import bookingReducer from "./bookingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
    authentication: persistedAuthReducer,
    productData: persistedProductReducer,
    alertData: alertReducer,
    bookingData:bookingReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
