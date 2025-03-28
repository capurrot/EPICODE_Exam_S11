import { useSelector } from "react-redux";
import SongList from "./SongList";

const MainComponent = () => {
  const artists = useSelector((state) => state.artists.list.content);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      {artists.map((artist, artIndex) => (
        <div className="row" key={artIndex}>
          <SongList artist={artist} artIndex={artIndex} className="col-10" />
        </div>
      ))}
    </main>
  );
};

export default MainComponent;
