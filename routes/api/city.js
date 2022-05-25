const express = require("express")
const router = express.Router();
const cityCtrl = require('../../controllers/city')

router.get('/', cityCtrl.index)
router.post('/', cityCtrl.create)
router.get('/:geoDBId', cityCtrl.detail)


module.exports = router;