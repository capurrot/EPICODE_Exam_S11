export const FETCH_OK = "FETCH_OK";
export const FETCH_ERR = "FETCH_ERR";
export const SELECT_ARTIST = "SELECT_ARTIST";

export const fetchSongs = (artist) => {
  return async (dispatch, getState) => {
    console.log("getState()", getState());
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist);
      if (response.ok) {
        const fetchedSongs = await response.json();
        dispatch({ type: FETCH_OK, payload: fetchedSongs.data });
      } else {
        console.log("Error fetching songs");
      }
    } catch (error) {
      dispatch({ type: FETCH_ERR, payload: error.message });
    }
  };
};
