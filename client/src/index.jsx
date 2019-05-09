import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [{ deway: "movies" }],
      // movies: [],
      favorites: [{ deway: "favorites" }],
      showFaves: false,
    };

    // you might have to do something important here!
  }

  getMovies(id) {
    // make an axios request to your server on the GET SEARCH endpoint
    console.log("This is the id were going to search", id)

    axios.get('/movies/search', { params: id })
      .then(data => {
        console.log("These are our movies in the front end: ", data.data)
        this.setState({ movies: data.data })
      })
    //set state with movies 

    // make axios request from react side to db api with genre in an order
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies} />
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));