const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    city: {type: mongoose.Schema.Types.ObjectId, ref: "City"},
    review: String
})

module.exports = mongoose.model("Review", reviewSchema)