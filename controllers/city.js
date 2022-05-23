const City = require('../models/city');

module.exports = {
    index,
    create
}

function create(req, res){
    console.log(req.file, req.body, "this is the create method", req.user)
    try {
        const city = await City.create(req.body)
        console.log(city)
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