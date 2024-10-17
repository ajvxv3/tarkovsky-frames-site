function MovieButton({ movieTitle }) {
  const urlTitle = String(movieTitle).toLowerCase().replace(' ','_');
  const urlPhoto = `https://tarkovsky-frames.s3.us-west-1.amazonaws.com/${urlTitle}/${urlTitle}_0500.png`;

  return (
    <button onClick={() => console.log({ urlPhoto })}>{movieTitle}</button>
  );
}

export default MovieButton;
