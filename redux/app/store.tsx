import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);
export default store;

