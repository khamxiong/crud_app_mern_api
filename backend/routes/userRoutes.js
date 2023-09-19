const express = require("express");
const {registerUser,loginUser,getUser}  = require('../controllers/userController')
const router = express.Router();

// router.route('/').post(registerUser)
// router.route('/login').post(registerUser)

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/:id',getUser)

module.exports = router;
