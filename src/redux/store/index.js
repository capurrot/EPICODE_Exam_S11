import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artistReducer from "../reducers/artistReducer";

const rootReducer = combineReducers({
  artist: artistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
