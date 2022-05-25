const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create')

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
citySchema.static('findOneOrCreate', async function findOneOrCreate(condition, doc) {
    const one = await this.findOne(condition);
  
    return one || this.create(doc);
});// find or create plugin found from here https://stackoverflow.com/questions/40102372/find-one-or-create-with-mongoose
// main reason why i dislike mongoose, why isnt this a thing already
module.exports = mongoose.model("City", citySchema)