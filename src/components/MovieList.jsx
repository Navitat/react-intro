import moviesArr from "../data/movies.json";

function MovieList() {
  let message = "";
  if (moviesArr.length > 0) {
    message = <h3>Number of movies: {moviesArr.length}</h3>;
  } else {
    message = <h3>No movies to show</h3>;
  }

  return (
    <section id="movie-list">
      {message}
      {moviesArr.map((movie) => {
        return (
          <div key={movie.id} className="box">
            <p>{movie.title}</p>
            <p> Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>

            {movie.imgURL !== undefined ? (
              <img src={movie.imgURL} alt="movie poster" />
            ) : (
              <p>No image</p>
            )}

            {movie.rating >= 7 && <p className="badge">RECOMMENDED</p>}
          </div>
        );
      })}
    </section>
  );
}

export default MovieList;
