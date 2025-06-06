import { REMOVE_ARTIST, SEARCH_ARTIST } from "../actions";

const initialState = {
  list: {
    /* Adesso oltre alle città colombiane mettiamo anche la musica. Se non ha capito che mi piace la Colombia :-) */
    content: ["los diablitos", "pibe bueno", "felipe pelaez"],
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        list: {
          ...state.list,
          /* Per impostare che l'artista ricercato venga messo come primo della lista 
            metto l'action.payload prima dello state list
          */
          content: [action.payload, ...state.list.content],
        },
      };
    case REMOVE_ARTIST:
      return {
        ...state,
        list: {
          ...state.list,
          content: state.list.content.filter((_, artIndex) => artIndex !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default artistsReducer;
