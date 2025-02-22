import { useState, useEffect } from "react";
import Song from "./Song";

const SongList = ({ artist }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  const getSongs = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
      if (response.ok) {
        const fetchedSongs = await response.json();
        setSongs(fetchedSongs.data);
      } else {
        console.log("Error fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-10">
      <div id="rock">
        <h2>{songs.length > 0 && songs[0].artist.name}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs.slice(0, 4).map((song) => (
            <Song key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongList;
