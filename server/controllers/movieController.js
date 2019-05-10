const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const { API_KEY } = require('../../config')
const axios = require('axios')
const { db } = require('../../db/sql/index.js')
const { connection } = require('../../db/sql/index.js')
// const morgan = require('morgan')

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {

    // console.log('controllers getSearch', req.query) 

    let { id, genre } = req.query

    // let query = connection.query('INSERT INTO movies (id, img_path, popularity, release_date, title) SET ? ', req.body, (err, result) => {
    //   console.log(err, result)
    // })


    

    // get the search genre     

    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
    axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&vote_average.lte=0&include_video=false&include_adult=false&sort_by=vote_count.desc&language=en-US&api_key=${API_KEY}`)
      .then(data => { res.send(data.data.results) })
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres

    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((data) => {
        res.send(data.data.genres)
      })
      .catch(err => {
        res.send(500)
        console.log('getGenres Controller ', err)
      })
  },
  saveMovie: (req, res) => {
    console.log('controllers saveMovie req.body => ', req.body)
    let { id, poster_path, popularity, release_date, title } = req.body.movie
    // let {id} = req.body.movie
    // console.log('\n\n\n\n IDDDDD => ', id)
    console.log(`\n\n\n\n ${release_date.split('-')[0]} \n\n\n`)
    release_date = release_date.split('-')[0]

    // db.query()
    db.query('INSERT INTO movies (id, img_path, popularity, release_date, title) VALUES (?,?,?,?,?)', ([id, poster_path, popularity, release_date, title]), (err, result) => {
      console.log('\n\n\n\n\n\n\ err in saveMove in controllers => ', err, '\n\n result =>', result)
    })


    // db.query('INSERT INTO movies (id, img_path, popularity, release_date, title) VALUES (?,?,?,?,?)', (id, poster_path, popularity, release_date, title), (err, result) => {
    //   console.log('\n\n\n\n\n\n\ err in saveMove in controllers => ', err, '\n\n result =>', result)
    // })

    // console.log('controllers folder saveMovie', req.query) 

  },
  deleteMovie: (req, res) => {

  }
}