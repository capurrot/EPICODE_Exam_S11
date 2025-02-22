import { useSelector } from "react-redux";
import SongList from "./SongList";

const MainComponent = () => {
  const artists = useSelector((state) => state.artists.list);

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
      {artists.map((artist) => (
        <div className="row" key={artist}>
          <SongList artist={artist} className="col-10" />
        </div>
      ))}
    </main>
  );
};

export default MainComponent;
