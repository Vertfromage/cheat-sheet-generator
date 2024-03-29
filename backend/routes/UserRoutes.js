const express = require('express')
const {
    createUser,
    getAllUsers,
    queryUsersByName,
    getUser,
    deleteUser,
    updateUser,
    queryUsersByEmail
} = require('../controllers/UserController')

const router = express.Router()

// GET all Users
router.get('/', getAllUsers)

// query by email
router.get('/find/:email', queryUsersByEmail)

// get a single User by id
router.get('/:id', getUser)

// query User by name
router.get('/:name', queryUsersByName)

// POST a new User
router.post('/', createUser)

// DELETE a User
router.delete('/:id', deleteUser)

// UPDATE a User
router.patch('/', updateUser)

// Print to PDF
// 


module.exports = router