const mongoose = require('mongoose');

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
    geoDBId: Number
})

module.exports = mongoose.model("City", citySchema)