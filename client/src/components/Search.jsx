import React from 'react';
import Axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      id: {}
    };
    this.getGenres = this.getGenres.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount() {
    this.getGenres();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.getMovies(this.state.id)
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    Axios.get('movies/genres')
      .then((data) => {
        this.setState({
          genres: data.data
        })
      })

  }

  handleChange(event) {
    event.preventDefault()
    // https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
    let id = event.target.value.split(" ")[0]
    let movie = event.target.value.split(" ")[1]
    this.setState({ id: { id, movie } })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => { this.props.swapFavorites() }}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.handleChange}>
          {this.state.genres.map(({ id, name }) => {
            return <option value={id + " " + name}>{name}</option>
          })}
        </select>
        <br /><br />

        <button onClick={this.handleClick}>Search</button>

      </div>
    );
  }
}

export default Search;