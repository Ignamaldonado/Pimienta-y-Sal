var express = require('express');
var router = express.Router();
var indexController = require ('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);;

router.get ('/menudetail' , indexController.menudetail);

router.get ('/search' , indexController.search);

router.get ('/searchedit' , indexController.searchedit);

router.get ('/searcheditproduct' , indexController.searcheditproduct);

module.exports = router;
