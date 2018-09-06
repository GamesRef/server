const axios = require('axios');

module.exports = {
  search: function(req,res) {   
    var q = req.body.q
    var year = (new Date).getFullYear();
    var dateFormat = `${year}-01-01T00:00:00-08:00`
    axios({
      method:'get',
      url:`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&order=relevance&publishedAfter=${dateFormat}&type=video&key=${process.env.YOUTUBE_KEY}`
    })
      .then(function(response) {
        res.status(200).json(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  nextPage: function(req,res) {
    var q = req.body.q
    var nextPageToken = req.body.nextPageToken
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&order=relevance&publishedAfter=${dateFormat}&type=video&key=${process.env.YOUTUBE_KEY}`
    axios({
      method:'get',
      url:`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&order=relevance&publishedAfter=${dateFormat}&type=video&key=${process.env.YOUTUBE_KEY}`
    })
      .then(function(response) {
        res.status(200).json(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}