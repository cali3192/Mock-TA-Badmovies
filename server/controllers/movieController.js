const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const {API_KEY} = require('../../config')
const axios = require('axios')
// const morgan = require('morgan')

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {

    // get the search genre     

    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    
    // send back
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((data) =>  {
      res.send( data.data.genres)
    })
    .catch(err => {
      res.send(500)
      console.log('getGenres Controller ',err)
    }) 
  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}