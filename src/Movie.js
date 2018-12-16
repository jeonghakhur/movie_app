import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <img src={poster} alt={title} className="Movie__Poster" />
      <h1>{title}</h1>
      <Moviegenres genres={genres} />
      <p className="Movie_synopsis">{synopsis}</p>
    </div>
  )
}

function Moviegenres({genres}) {
  const genre = genres.map((genre, index) => {
    return (<li key={index}>{genre} {genres.length - 1 !== index && `,`}</li>)
  })
  return (
    <ul>
      {genre}
    </ul>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  synopsis: PropTypes.string.isRequired
}

export default Movie;