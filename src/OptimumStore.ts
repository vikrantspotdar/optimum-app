import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import customerReducer from "./Reducers/CustomerReducer";

const persistConfig = {
   key: "root",
   storage,
};

const rootReducer = combineReducers({
   customerReducer: customerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const OptimumStore = configureStore({
   reducer: persistedReducer,
   middleware: [thunk],
});

export const persistor = persistStore(OptimumStore);
