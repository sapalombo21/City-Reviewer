const City = require('../models/city');

module.exports = {
    index,
    create,
    detail
}

async function create(req, res){
    console.log(req.file, req.body, "this is the create method", req.user)
    console.log("req.body below")
    console.log(typeof req.body)
    try {
        const city = await City.findOneOrCreate({geoDBId: req.body.geoDBId}, req.body)
        console.log(city, "here is the new city model")
        res.status(201).json({city:city})
    } catch (err) {
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res) {
    try {
        const cities = await City.find({})
        res.status(200).json({cities})
    } catch (err) {
        console.log(err, 'this should not happen')
    }
}

async function detail(req, res) {
    try{
        const city = await City.findOne({geoDBId: req.params.geoDBId})
        // find a city by the url parameter
        if (!city) return res.status(404).json({err: "City page does not exist"})

        res.status(200).json({city: city})
    } catch (err) {
        console.log(err)
        res.status(400).json({err})
    }
}