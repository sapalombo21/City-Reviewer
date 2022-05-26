const City = require('../models/city');

module.exports = {
    create,
    deleteReview
}

async function create(req, res) {
    // need City ID and the JSON from the form
    try {
        const city = await City.findById(req.params.id)
        city.reviews.push({username: req.user.username, userID: req.user._id, review: req.body.review})
        await city.save();
        res.status(201).json({data: "review created"})
    } catch (err) {
        res.status(400).json({err})
    }
}

async function deleteReview(req, res) {
    try {
        const city = await City.findOne({'reviews._id': req.params.id, 'likes.username': req.user.username});
        city.likes.remove(req.params.id)
        await city.save();
        res.json({data: 'review removed'})
    } catch (err) {
        res.status(400).json({err})
    }
}