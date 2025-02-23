import { ADD_FAVOURITES, FETCH_ERR, FETCH_OK, IS_LOADING, REMOVE_FAVOURITES, SELECT_SONG } from "../actions";

const initialState = {
  songs: {
    content: [],
  },
  songSelected: {
    content: null,
  },
  favourites: {
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
      return { ...state, error: action.payload };
    case SELECT_SONG:
      return {
        ...state,
        songSelected: {
          ...state.songSelected,
          content: action.payload,
        },
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((fav) => fav.id !== action.payload),
        },
      };
    case IS_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };

    default:
      return state;
  }
};
export default songsReducer;
