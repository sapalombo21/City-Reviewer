const mongoose = require('mongoose');


const reviewScema = mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId},
    review: String
})

const citySchema = mongoose.Schema({
    name: String,
    population: Number,
    country: String,
    countryCode: String,
    region: String,
    regionCode: String,
    latitude: Number,
    longitude: Number,
    wikiDataId: String,
    geoDBId: Number,
    reviews: [reviewScema]
})

module.exports = mongoose.model("City", citySchema)