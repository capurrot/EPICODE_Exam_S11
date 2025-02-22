import { FETCH_ERR, FETCH_OK } from "../actions";

const initialState = {
  songs: {
    content: [],
  },
  isloading: false,
  error: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OK:
      return {
        ...state,
        songs: {
          ...state.songs,
          content: [...state.songs.content, action.payload],
        },
        isloading: false,
      };
    case FETCH_ERR:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};
export default songsReducer;
