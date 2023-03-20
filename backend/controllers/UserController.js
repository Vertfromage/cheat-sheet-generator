const AWS = require('aws-sdk')

// Import my model
const UserTable = require("../models/UserTable")

// get a single User
const getUser = async (req, res) => {
    const {id} = req.params
    // checking to make sure all variables are there.
    if(!id){
        return res.status(400).json({"error": 'No id attached'})
    }

    try {
        const User = await UserTable.get(id)
        User.toJSON    
        res.status(200).json(User)
    } catch (error) {
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// get a multiple Users - scan by default returns every item, but use filters to get specific sets
// Its not a efficient as querry when using filters.
const getAllUsers = async (req, res) => {
    
    try{
        const Users = await UserTable.scan().exec()
        return res.status(200).json(Users)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// Scans by name - Query is more efficient than scan
const queryUsersByName = async (req, res) => {
    const {name} = req.params

    // checking to make sure all variables are there.
    if(!name){
        return res.status(400).json({"error": 'No name attached'})
    }
    
    try{
        const Users = await UserTable.query().filter('name').eq(name).exec()
        return res.status(200).json(Users)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// Scans by name - Query is more efficient than scan
const queryUsersByEmail = async (req, res) => {
    const {email} = req.params

    console.log("Query "+email)

    // checking to make sure all variables are there.
    if(!email){
        return res.status(400).json({"error": 'No email attached'})
    }
    
    try{
        //should work with query but it isn't, query is better fix later 
        const User = await UserTable.scan('email').eq(email).exec() 
        return res.status(200).json(User)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// create new User
const createUser = async (req, res) => {
    const {name, password, email} = req.body; // destructuring

    if(!password || !email){
        return res.status(400).json({"error": 'Missing variables! Need name and User'})
    }

    id = AWS.util.uuid.v4()


    // add doc to db
    try{
        const User = await UserTable.create({id, name, password, email, pages:[]})
        return res.status(200).json(User) // return the object
    }catch(error){
        console.log("something didn't work in create!!")
        return res.status(400).json({"error": error.message})
    }
}

// delete a User - always returns 200, if it doesn't find the id it considers task complete.
const deleteUser = async (req, res) => {
    const {id} = req.params

    try{
        const User = await UserTable.delete(id)
        return res.status(200).json(User)
    }catch(error){
        return res.status(400).json({"error": error.message})
    }
}

// update a User
const updateUser = async (req,res) => {
    const {id, name, pages} = req.body; // destructuring

    if(!id){
        return res.status(400).json({"error": 'Missing variables! Need id'})
    }

    try{
        const User = await UserTable.update({
            "id":id,
            "name": name,
            "pages": pages
        })
        return res.status(200).json(User)
    }catch(error){
        return res.status(400).json({"error": error.message})
    }
}



module.exports = {
    createUser, 
    getUser, 
    getAllUsers,
    queryUsersByName,
    deleteUser,
    updateUser,
    queryUsersByEmail
}

