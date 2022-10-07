import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slices/SliceReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer =combineReducers({
    todos:SliceReducer
})
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist:[]
}
      
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

const persistor = persistStore(store)


export {store,persistor};