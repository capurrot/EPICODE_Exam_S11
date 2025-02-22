import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { useEffect } from "react";
import { fetchSongs } from "../redux/actions";

const SongList = ({ artist }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.data);

  /*   const isLoading = useSelector((state) => state.songs.isloading);
  const error = useSelector((state) => state.songs.error); */

  useEffect(() => {
    dispatch(fetchSongs(artist));
  }, [artist, dispatch]);

  return (
    <div className="col-10">
      {songs && songs.length > 0 && console.log(songs)}
      <div id="rock">
        <h2>{songs !== undefined && songs[0].artist.name}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs !== undefined && songs.slice(0, 4).map((song) => <Song key={song.id} song={song} />)}
        </div>
      </div>
    </div>
  );
};

export default SongList;
