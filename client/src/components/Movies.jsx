import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(movie) {
    this.props.saveMovie(movie)
  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">

        {this.props.movies.map((movie, index) => {
          if (!movie.poster_path) {
            movie.poster_path = '/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg'
          }

          return (
            <li key={index} onClick={e => { this.handleClick(movie) }} className="movie_item" >
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} />
              <div className="movie_description">
                <h2>{movie.original_title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{`${movie.release_date}`.split('-')[0]}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{Math.ceil(movie.popularity)}</span>
                  </div>
                </section>
              </div>
            </li>)
        })}

      </ul >
    );
  }
}

export default Movies;