const router = require('express').Router()
const {getAllUsers} = require('../controller/userController')

router.get('/users/', getAllUsers)
router.get('/users/:id')
router.post('/users')
router.patch('/users/:id')
router.delete('/users/:id')



module.exports = router