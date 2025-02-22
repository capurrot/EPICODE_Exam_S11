import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { useEffect, useState } from "react";
import { FETCH_ERR, FETCH_OK } from "../redux/actions";

const SongList = ({ artist }) => {
  const [songs, setSongs] = useState();
  const dispatch = useDispatch();
  const songsRedux = useSelector((state) => state.songs.songs.content);
  /*   const isLoading = useSelector((state) => state.songs.isloading);
  const error = useSelector((state) => state.songs.error); */

  useEffect(() => {
    fetchSongs(artist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  const fetchSongs = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist);
      if (response.ok) {
        const fetchedSongs = await response.json();
        dispatch({ type: FETCH_OK, payload: fetchedSongs.data.slice(0, 4) });
        setSongs(fetchedSongs.data.slice(0, 4));
      } else {
        console.log("Error fetching songs");
      }
    } catch (error) {
      dispatch({ type: FETCH_ERR, payload: error.message });
    }
  };

  return (
    <div className="col-10">
      <div id="rock">
        {console.log(songsRedux)}
        <h2>{songs !== undefined && songs[0].artist.name}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs !== undefined && songs.map((song) => <Song key={song.id} song={song} />)}
        </div>
      </div>
    </div>
  );
};

export default SongList;
