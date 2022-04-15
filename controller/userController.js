const Users = require('../models/users')
async function getAllUsers(req,res){
    try{
        const data = await Users.getUsers()
        return res.status(200).json({
            data
        })
    }catch(err){
          return res.status(400).json({
              message: err.message
          })
    }
 
}
async function createUserLogin (req, res){
const email = req.body
const password = req.body
if(!email && password){
    return res.status(400).json({
        message: 'Email and password are required'
    })
}
}


module.exports = {
    getAllUsers,
    createUserLogin
}