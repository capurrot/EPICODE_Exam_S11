import SongList from "./SongList";

const MainComponent = () => {
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
      <div className="row">
        <SongList artist={"u2"} className="col-10" />
      </div>
      <div className="row">
        <SongList artist={"queen"} className="col-10" />
      </div>
      <div className="row">
        <SongList artist={"pink floyd"} className="col-10" />
      </div>
    </main>
  );
};

export default MainComponent;
