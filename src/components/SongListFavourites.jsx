import SongFavourite from "./SongFavoutite";

const SongListFavourites = ({ song }) => {
  /* const songsRedux = useSelector((state) => state.songs.songs.content); */
  /*   const isLoading = useSelector((state) => state.songs.isloading);
  const error = useSelector((state) => state.songs.error); */
  return <>{song !== undefined && <SongFavourite key={song.id} song={song} />}</>;
};

export default SongListFavourites;
