const axios = require('axios');

module.exports = {
  search: function(req,res) {   
    var q = req.body.q
    axios({
      method:'get',
      url:`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}+dota+2&order=relevance&maxResults=6&regionCode=US&type=video&key=${process.env.YOUTUBE_KEY}`
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
    axios({
      method:'get',
      url:`https://www.googleapis.com/youtube/v3/search?pageToken=${nextPageToken}&part=snippet&q=${q}+dota+2&order=relevance&maxResults=6&regionCode=US&type=video&key=${process.env.YOUTUBE_KEY}`
    })
      .then(function(response) {
        console.log(response.data)
        res.status(200).json(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}