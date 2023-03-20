// I'm using lambdas I thought I'd use it for my pages because I hadn't done them yet. 
// video: https://www.youtube.com/watch?v=f7o8RV3Edck

const AWS = require('aws-sdk')

// Import my model
const PageTable = require("../models/PageTable")

//get all pages
const getAllPages = async (req, res) => {
    
    try{
        const Pages = await PageTable.scan().exec()
        return res.status(200).json(Pages)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// get a single Page
const getPage = async (req, res) => {
    const {id} = req.params
    // checking to make sure all variables are there.
    if(!id){
        return res.status(400).json({"error": 'No id attached'})
    }

    try {
        const Page = await PageTable.get(id)
       // Page.toJSON    // not sure if it's already json at this point? I think it's an object
        return res.status(200).json(Page)
    } catch (error) {
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// Scans by name - Query is more efficient than scan
const queryPagesByUserId = async (req, res) => {
    const {userId} = req.params

    // checking to make sure all variables are there.
    if(!userId){
        return res.status(400).json({"error": 'No userId attached'})
    }
    
    try{
        const Pages = await PageTable.scan("userId").eq(userId).exec()
        return res.status(200).json(Pages)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// create new Page
const createPage = async (req, res) => {
    const {name, userId, pageBody} = req.body; // destructuring

    if(!name || !pageBody || !userId){
        return res.status(400).json({"error": 'Missing variables! Need name and Page'})
    }

    id = AWS.util.uuid.v4()

    // add doc to db
    try{
        const Page = await PageTable.create({id, name, pageBody, userId})
        return res.status(200).json({pageId: Page.id}) // return the object
    }catch(error){
        console.log("something didn't work in create!!")
        return res.status(400).json({"error": error.message})
    }
}

// delete a Page - always returns 200, if it doesn't find the id it considers task complete.
const deletePage = async (req, res) => {
    const {id} = req.params

    try{
        const Page = await PageTable.delete(id)
        return res.status(200).json(Page)
    }catch(error){
        return res.status(400).json({"error": error.message})
    }
}

// update a Page
const updatePage = async (req,res) => {
    const {id, name, page, tags} = req.body; // destructuring

    if(!id||!name || !page){
        return res.status(400).json({"error": 'Missing variables! Need id, name and page'})
    }

    try{
        const Page = await PageTable.update({id, name, page, tags})
        return res.status(200).json(Page)
    }catch(error){
        return res.status(400).json({"error": error.message})
    }
}



module.exports = {
    createPage, 
    getPage, 
    getAllPages,
    queryPagesByUserId,
    deletePage,
    updatePage
}

