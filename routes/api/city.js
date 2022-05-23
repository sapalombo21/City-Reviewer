const express = require("express")
const router = express.Router();
const cityCtrl = require('../../controllers/city')

router.get('/', cityCtrl.index())

module.exports = router;