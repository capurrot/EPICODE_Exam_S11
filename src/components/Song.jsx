import { BiHeart } from "react-icons/bi";

const Song = ({ song }) => {
  return (
    <>
      <div className="col text-center">
        <div className="d-flex flex-column align-items-center">
          <img className="img-fluid" src={song.album.cover_medium} alt="track" />
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
