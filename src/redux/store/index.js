import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artistsReducer from "../reducers/artistsReducer";
import songsReducer from "../reducers/songsReducers";

const rootReducer = combineReducers({
  artists: artistsReducer,
  songs: songsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
