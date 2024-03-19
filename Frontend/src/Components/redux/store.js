// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import alertReducer from "./alertSlice";

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
    alertData: alertReducer
  },
});

const persistor = persistStore(store);

export { store, persistor };
