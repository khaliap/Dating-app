const Users = require('../models/users')
async function getAllUsers(req,res){
    try{
        const data = await Users.getAllUsers
        res.json({
            data,
        })
    }catch(err){
          res.status(400) 
          res.json()
          
    }
 
}


module.exports = {
    getAllUsers
}