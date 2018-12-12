import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

const movie_title = [
  "Avengers",
  "Black Panther",
  "Deadpool 2",
  "Big Hero 6"
]

const movie_images = [
  "https://yts.am/assets/images/movies/avengers_infinity_war_2018/large-cover.jpg",
  "https://yts.am/assets/images/movies/black_panther_2018/large-cover.jpg",
  "https://yts.am/assets/images/movies/deadpool_2_2018/large-cover.jpg",
  "https://yts.am/assets/images/movies/big_hero_6_2014/large-cover.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movie_title[0]} poster={movie_images[0]} />
        <Movie title={movie_title[1]} poster={movie_images[1]} />
        <Movie title={movie_title[2]} poster={movie_images[2]} />
        <Movie title={movie_title[3]} poster={movie_images[3]} />
      </div>
    )
  }
}

export default App;