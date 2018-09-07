const request = require('request');
//const accessToken = process.env.ACCESS_TOKEN

module.exports = {
    list: function (req, res) {

        var options = {
            url: 'https://api.unsplash.com/users/andryjns/collections?client_id=3e292af3a1fef09f387d93b55540ec1bca19ad55bd01e4568816038a965c9ba2',
            headers: {
                'User-Agent': 'request',    
                //"Authorization": 'token ' + accessToken
            }
        }

        function callback(error, response, body) {
            if (!error) {

                let arrayData = JSON.parse(body)[0].preview_photos
                var result = []

                for (var item of arrayData) {
                    let target = item.urls.full
                    result.push(target)
                }

                res.status(200).json(
                    //msg: "View success",
                    result
                )
            } else {
                res.status(500).json({
                    msg: error.message
                })
            }
        }
        request.get(options, callback)
    }
}