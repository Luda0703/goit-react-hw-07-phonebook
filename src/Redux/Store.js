import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import {  filtersReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
  }

  const rootReduser = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
  })
  
 const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)