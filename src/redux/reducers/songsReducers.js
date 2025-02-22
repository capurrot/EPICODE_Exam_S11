import { FETCH_ERR, FETCH_OK } from "../actions";

const initialState = {
  songs: [],
  isloading: false,
  error: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OK:
      return { ...state, isloading: false, data: action.payload };
    case FETCH_ERR:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export default songsReducer;
