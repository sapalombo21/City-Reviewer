const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/reviews')

router.post('/city/:id/reviews', reviewCtrl.create)
router.delete('/reviews/:id', reviewCtrl.deleteReview)

module.exports = router;