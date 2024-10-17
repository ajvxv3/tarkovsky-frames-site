import MovieButton from "./MovieButton";

function MovieList() {
  const movies = [
    "Stalker",
    "Mirror",
    "Nostalgia",
    "Solaris",
    "Sacrifice",
    "Andrei Roublev",
    "Ivan's Childhood",
  ];
  return (
    <aside>
      <ul>
        {movies.map((movie, index) => (
          <MovieButton key={index} movieTitle={movie}></MovieButton>
        ))}
      </ul>
    </aside>
  );
}

export default MovieList;
