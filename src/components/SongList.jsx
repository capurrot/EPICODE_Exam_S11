import { useDispatch } from "react-redux";
import Song from "./Song";
import { useEffect, useState } from "react";
import { FETCH_ERR, FETCH_OK, REMOVE_ARTIST } from "../redux/actions";
import { BsTrash3Fill } from "react-icons/bs";

const SongList = ({ artist, artIndex }) => {
  const [songs, setSongs] = useState();
  const dispatch = useDispatch();
  /* const songsRedux = useSelector((state) => state.songs.songs.content); */
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
        {/* Per come ho pensato la struttura delle row e dello stato della ricerca che non cambia ogni volta ma che aggiunge 
            una nuova riga per poter verificare che il preferito resti in memoria anche se la row non è più presente imposto
            un bottone che eliminerà la row e se ricercato ancora l'artista dovrà esserci ancora il preferito.
            Si può verificaare la stessa cosa selezinando un preferito e ricercando di nuovo l'artista e il preferito è già presente.
            Altra cosa interessante è che se si clicca su un'immagine che era tra i preferiti e poi si elimina la row, comunque
            l'immagine che è ancora presente sul player (ovviamente fino a quando non si clicca su un'altra immagine) vvisualizza ancora
            lo stato di preferito.
            */}
        <h2>
          {songs !== undefined && songs[0].artist.name}
          <BsTrash3Fill className="trashArt" onClick={() => dispatch({ type: REMOVE_ARTIST, payload: artIndex })} />
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs !== undefined && songs.map((song) => <Song key={song.id} song={song} />)}
        </div>
      </div>
    </div>
  );
};

export default SongList;
