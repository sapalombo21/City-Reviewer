const City = require('../models/city');

module.exports = {
    index,
    create
}

async function create(req, res){
    console.log(req.file, req.data, "this is the create method", req.user)
    console.log("req.body below")
    console.log(typeof req.data)
    try {
        const city = await City.create(req.body)
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