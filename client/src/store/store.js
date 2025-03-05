import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import bookingSlice from "./bookingSlice";
import walletSlice from "./walletSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "wallet"], // Persist auth & wallet state
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    booking: bookingSlice,
    wallet: walletSlice,
  },
});

export const persistor = persistStore(store);
