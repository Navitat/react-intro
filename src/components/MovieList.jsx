import moviesArr from "../data/movies.json";

function MovieList() {
  return (
    <section id="movie-list">
      <h3>List of movies:</h3>
      {moviesArr.map((movie) => {
        return (
          <div key={movie.id} className="box">
            <p>{movie.title}</p>
            <p>{movie.year}</p>
          </div>
        );
      })}
    </section>
  );
}

export default MovieList;
