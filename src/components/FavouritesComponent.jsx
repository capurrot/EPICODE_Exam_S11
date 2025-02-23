import { useSelector } from "react-redux";
import SongListFavourites from "./SongListFavourites";

const FavouritesComponent = () => {
  const favouritesSongs = useSelector((state) => state.songs.favourites.content);

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
      <div id="rock">
        <h2>Preferiti</h2>
        <div id="rock" className="col-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {favouritesSongs.map((song, artIndex) => (
              <div key={artIndex} className="col">
                {console.log(song, artIndex)}
                <SongListFavourites song={song} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FavouritesComponent;
