var express = require('express')
var router = express.Router()
var detailController = require('../controllers/detailController')

router.get ('/:productid', detailController.detail)

router.get ('/:productid/edit' , detailController.editView)

router.put ('/editsave' , (req,res) => {res.send ('ando')})

module.exports = router