import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artistsReducer from "../reducers/artistsReducer";

const rootReducer = combineReducers({
  artists: artistsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
