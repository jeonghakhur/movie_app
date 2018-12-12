import React, {Component} from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {

  // Render: componentWillMount render componentDidMout Update
  // componentWillReciveProps shouldComponentUpdate componentWillUpdate render
  // componentDidUpdate

  state = {}

  componentDidMount() {
    setTimeout(() => {
      // this.state.greeting = 'something';
      this.setState({
        movies: [
          {
            title: "Thor: Ragnarok",
            image: "https://yts.am/assets/images/movies/thor_ragnarok_2017/large-cover.jpg"
          }, {
            title: "Avengers",
            image: "https://yts.am/assets/images/movies/avengers_infinity_war_2018/large-cover.jpg"
          }, {
            title: "Black Panther",
            image: "https://yts.am/assets/images/movies/black_panther_2018/large-cover.jpg"
          }, {
            title: "Deadpool 2",
            image: "https://yts.am/assets/images/movies/deadpool_2_2018/large-cover.jpg"
          }, {
            title: "Big Hero 6",
            image: "https://yts.am/assets/images/movies/big_hero_6_2014/large-cover.jpg"
          }
        ]
      })
    }, 5000)
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