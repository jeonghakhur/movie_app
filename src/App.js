import React, {Component} from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {

  // Render: componentWillMount render componentDidMout Update
  // componentWillReciveProps shouldComponentUpdate componentWillUpdate render
  // componentDidUpdate

  state = {}

  componentDidMount() {
   fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
   .then(response => response.json())
   .then(json => console.log(json))
   .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
        title={movie.title}
        poster={movie.image}
        key={index}
      />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;