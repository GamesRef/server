const request = require('request')

module.exports = {

    searchWiki: function (req, res) {

        var options = {
            url: `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${req.body.query}`,
            headers: {
                'User-Agent': 'request'  
            }
        }

        function callback(error, response, body) {
            if (!error) {

                let arrayData = JSON.parse(body)    
                // var result = []

                // for (var item of arrayData) {
                //     let target = item.urls.full
                //     result.push(target)
                // }

                res.status(200).json(
                    arrayData
                )
            } else {
                res.status(500).json({
                    msg: error.message
                })
            }
        }
        request.post(options, callback)
    }
}