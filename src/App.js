import React, {Component} from 'react';
import Movie from './Movie';
import './App.css';

const movie_title = ["Avengers", "Black Panther", "Deadpool 2", "Big Hero 6"]

const movie_images = ["https://yts.am/assets/images/movies/avengers_infinity_war_2018/large-cover.jpg", "https://yts.am/assets/images/movies/black_panther_2018/large-cover.jpg", "https://yts.am/assets/images/movies/deadpool_2_2018/large-cover.jpg", "https://yts.am/assets/images/movies/big_hero_6_2014/large-cover.jpg"]

const movies = [
  {
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

class App extends Component {

  // Render:
  // componentWillMount
  // render
  // componentDidMout

  // Update
  // componentWillReciveProps
  // shouldComponentUpdate
  // componentWillUpdate
  // render
  // componentDidUpdate

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {movies.map((movie, index) => 
           <Movie 
            title={movie.title}
            poster={movie.image}
            key={index}
          />
        )}
      </div>
    )
  }
}

export default App;