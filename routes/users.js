var express = require('express');
var router = express.Router();
var userController = require ('../controllers/usercontrolller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get ('/register' , userController.register)

router.post ('/register' , userController.save)

router.get ('/register/complete' , userController.regcomplete)

module.exports = router;
