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
      favorites: [],
      showFaves: false,
    };

    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  
  handleClick(e) {
    e.preventDefault()
    this.props.getFavorites(this.state.id)
  }

  getMovies(id) {
    // make an axios request to your server on the GET SEARCH endpoint
    // console.log("This is the id were going to search", id)

    axios.get('/movies/search', { params: id })
      .then(data => {
        console.log("These are our movies in the front end: ", data.data)
        this.setState({ movies: data.data })
      })
    //set state with movies 
    this.saveMovie = this.saveMovie.bind(this)

    // make axios request from react side to db api with genre in an order
  }

  saveMovie(movie) {
    this.setState({ favorites: movie });
    // same as above but do something diff
    axios.post('/movies/save', { movie })
      .then(() => { console.log("MOVIE SAVED TO DB") })
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

  getFavorites() {
    // make request to the db
    // TODO: 
    Axios.get('movies/getFavorites')
      .then((data) => {
        this.setState({
          favorites: data.data
        })
      })
  }

  componentDidMount() {
    this.getMovies({ id: 12, movie: 'Adventure' })
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies} />
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));