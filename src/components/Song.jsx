import { BiHeart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { SELECT_SONG } from "../redux/actions";

const Song = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="col text-center">
        <div className="d-flex flex-column align-items-center">
          <img
            className="img-fluid"
            src={song.album.cover_medium}
            alt="track"
            onClick={() => dispatch({ type: SELECT_SONG, payload: song })}
          />
          <BiHeart className="heart" />
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

export default Song;
