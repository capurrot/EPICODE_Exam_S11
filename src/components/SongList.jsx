import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { useEffect, useState } from "react";
import { FETCH_ERR, FETCH_OK, IS_LOADING, REMOVE_ARTIST } from "../redux/actions";
import { BsTrash3Fill } from "react-icons/bs";
import { Alert } from "bootstrap";
import { Spinner } from "react-bootstrap";

const SongList = ({ artist, artIndex }) => {
  const [songs, setSongs] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.songs.isloading);

  /* Come vede ho cercato di impostare una parte relativa agli errori. Ma esplode l'app e non mi fa vedere gli errori.
  Magari questo potrebbe rispiegarmelo? Grazie... */

  const error = useSelector((state) => state.songs.error);

  /* Ho provato anche a impostare una differente visualizzazione degli spinner con tempi di partenza differenti.
  Provato in 3G per una visualizzione migliore e risulta molto carino (almeno... a me piace :-) */

  const [showFirstSpinner, setShowFirstSpinner] = useState(false);
  const [showSecondSpinner, setShowSecondSpinner] = useState(false);
  const [showThirdSpinner, setShowThirdSpinner] = useState(false);

  useEffect(() => {
    fetchSongs(artist);
    setTimeout(() => setShowFirstSpinner(true), 0);
    setTimeout(() => setShowSecondSpinner(true), 150);
    setTimeout(() => setShowThirdSpinner(true), 250);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  const fetchSongs = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist);
      if (response.ok) {
        const fetchedSongs = await response.json();
        /* Attraverso questo dispatch salvo i risultati delle fetch nello stato globale di redux */
        dispatch({ type: FETCH_OK, payload: fetchedSongs.data.slice(0, 4) });
        setSongs(fetchedSongs.data.slice(0, 4));
      } else {
        throw new Error("Error fetching songs");
      }
    } catch (error) {
      dispatch({ type: FETCH_ERR, payload: error.message });
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };

  return (
    <div className={isLoading ? "col-10 text-center" : "col-10"}>
      <div id="rock">
        {/* Per come ho pensato la struttura delle row e dello stato della ricerca che non cambia ogni volta ma che aggiunge 
            una nuova riga per poter verificare che il preferito resti in memoria anche se la row non è più presente imposto
            un bottone che eliminerà la row e se ricercato ancora l'artista dovrà esserci ancora il preferito.
            Si può verificaare la stessa cosa selezinando un preferito e ricercando di nuovo l'artista e il preferito è già presente.
            Altra cosa interessante è che se si clicca su un'immagine che era tra i preferiti e poi si elimina la row, comunque
            l'immagine che è ancora presente sul player (ovviamente fino a quando non si clicca su un'altra immagine) vvisualizza ancora
            lo stato di preferito.


            Aggiungo la parte per isLoading e error impostati con il dispatch
            */}

        {isLoading ? (
          <>
            {showFirstSpinner && <Spinner animation="grow" variant="light" className="me-2" />}
            {showSecondSpinner && <Spinner animation="grow" variant="light" className="me-2" />}
            {showThirdSpinner && <Spinner animation="grow" variant="light" />}
          </>
        ) : (
          <>
            <h2>
              {songs !== undefined && songs[0].artist.name}
              <BsTrash3Fill className="trashArt" onClick={() => dispatch({ type: REMOVE_ARTIST, payload: artIndex })} />
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {songs !== undefined && songs.map((song) => <Song key={song.id} song={song} />)}
            </div>
          </>
        )}
        {error && <Alert variant="danger">Errore {error}</Alert>}
      </div>
    </div>
  );
};

export default SongList;
