import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVOURITES, REMOVE_FAVOURITES, SELECT_SONG } from "../redux/actions";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

const SongFavourite = ({ song }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.songs.favourites.content);
  const isSongInFavourites = favourites.some((favSong) => favSong.id === song.id);

  return (
    <>
      <div className="text-center d-flex flex-column align-items-center">
        <div className="d-flex flex-column">
          <img
            className="img-fluid"
            src={song.album.cover_medium}
            alt="track"
            onClick={() => dispatch({ type: SELECT_SONG, payload: song })}
          />
          {isSongInFavourites ? (
            <BsFillHeartFill
              className="heart"
              onClick={() => dispatch({ type: REMOVE_FAVOURITES, payload: song.id })}
            />
          ) : (
            <BsHeart className="heart" onClick={() => dispatch({ type: ADD_FAVOURITES, payload: song })} />
          )}
        </div>
        <p style={{ marginTop: "-30px" }}>
          Track: {`"${song.title}"`}
          <br />
          Artist: {song.artist.name}
          <br />
        </p>
      </div>
    </>
  );
};

export default SongFavourite;
