const axios = require('axios');

const getHeroName = (req, res) => {
    axios.get(`https://api.opendota.com/api/heroStats`)
    .then((data) => {
        // data.data.forEach(element => {
        //     console.log(element.img)
        // });

        res.status(201).json({
            message: 'get all heroes',
            data: data.data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const searchHeroData = (req, res) => {
    axios.get(`https://api.opendota.com/api/heroStats`)
    .then((data) => {
        
        let heroName = req.query.heroName
        let result = []
        
        data.data.forEach(element => {
            if (element.localized_name.toLowerCase().indexOf(heroName.toLowerCase()) > -1) {
                result.push(element);
              }
        });

        if (result) {
            res.status(200).json({
              message: `success get starred repo`,
              result
            });
        } else {
            res.status(400).json({
                message: `Data not found`
            });
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    getHeroName,
    searchHeroData
};
