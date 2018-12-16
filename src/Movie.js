import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <img src={poster} alt={title} className="Movie__Poster" />
      <h1>{title}</h1>
      <Genres genres={genres} />
      <Synopsis synopsis={synopsis} />
    </div>
  )
}

function Genres({genres}) {
  const genre = genres.map((genre, index) => {
    return (<li key={index}>{genre} {genres.length - 1 !== index && `,`}</li>)
  })
  return (
    <ul>
      {genre}
    </ul>
  )
}

function Synopsis({synopsis}) {
  return (
    <LinesEllipsis
      text={synopsis}
      maxLine='3'
      ellipsis='...'
      trimRight
      basedOn='letters'
    />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  synopsis: PropTypes.string.isRequired
}

export default Movie;