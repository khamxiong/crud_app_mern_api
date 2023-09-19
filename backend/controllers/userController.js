// @desc Authenticate a user
// @route  Post /api/users/login
// @access Public 

const registerUser = (req,res) =>{
    res.json({message: 'Register User'})
} 
 // route post/api/users/login
const loginUser = (req,res) =>{
    res.json({message: 'Login  User'})
} 
// @access get user data
// route get/api/users/id

const getUser = (req,res) =>{
    res.json({message: '  User data'})
} 

module.exports = {
    registerUser,loginUser,getUser,
}