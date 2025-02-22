import { SEARCH_ARTIST } from "../actions";

const initialState = {
  list: {
    content: ["u2", "bob dylan", "led leppelin"],
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        list: {
          ...state.list,
          content: [action.payload, ...state.list.content],
        },
      };
    default:
      return state;
  }
};

export default artistsReducer;
