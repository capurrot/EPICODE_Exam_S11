import { useSelector } from "react-redux";
import SongListFavourites from "./SongListFavourites";

/* Per poter gestire una pagina di preferiti e ho dovuto create alcuni componenti solo per le songs favourites*/

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

      <div id="rock" className="col-10">
        <h2>Preferiti</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {favouritesSongs.map((song, artIndex) => (
            <div key={artIndex} className="col text-center">
              {console.log(song, artIndex)}
              <SongListFavourites song={song} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FavouritesComponent;
