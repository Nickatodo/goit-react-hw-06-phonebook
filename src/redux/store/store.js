import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../slices/ContactSlice";
import { filterReducer } from "../slices/FilterSlice";


import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'contacts',
    storage,
}

const rootReducer = { contactStore: persistReducer(persistConfig, contactReducer), filterStore: filterReducer };

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { },
      serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
    }),
});

export const persistor = persistStore(store);
