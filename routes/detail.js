var express = require('express')
var router = express.Router()
var detailController = require('../controllers/detailController')

router.get ('/:productid', detailController.detail)

module.exports = router