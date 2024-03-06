import storage from "redux-persist/lib/storage";
import { todoReducer } from "./todo-slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  "key": "todo",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  "reducer": persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      "serializableCheck": {
        "ignoredActions": [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
