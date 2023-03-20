// This is my controller, this is what the routes use to do stuff with the database

const AWS = require('aws-sdk')

// Import my model
const FormulaTable = require("../models/FormulaTable")


// get a single Formula
const getFormula = async (req, res) => {
    const {id} = req.params
    // checking to make sure all variables are there.
    if(!id){
        return res.status(400).json({"error": 'No id attached'})
    }

    try {
        const Formula = await FormulaTable.get(id)
        Formula.toJSON    
        res.status(200).json(Formula)
    } catch (error) {
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// get a multiple Formulas - scan by default returns every item, but use filters to get specific sets
// Its not a efficient as querry when using filters.
const getAllFormulas = async (req, res) => {
    
    try{
        const Formulas = await FormulaTable.scan().exec()
        return res.status(200).json(Formulas)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// Scans by name - Query is more efficient than scan
const queryFormulasByName = async (req, res) => {
    const {name} = req.params

    // checking to make sure all variables are there.
    if(!name){
        return res.status(400).json({"error": 'No name attached'})
    }
    
    try{
        const Formulas = await FormulaTable.query().filter("name").eq(name).exec()
        return res.status(200).json(Formulas)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": error.message})
    }
}

// Scan by tags - TODO

// create new Formula
const createFormula = async (req, res) => {
    const {name, formula, tags} = req.body; // destructuring

    if(!name || !formula){
        return res.status(400).json({"error": 'Missing variables! Need name and formula'})
    }

    id = AWS.util.uuid.v4()



    // add doc to db
    try{
        const Formula = await FormulaTable.create({id, name, formula, tags})
        return res.status(200).json(Formula) // return the object
    }catch(error){
        console.log("something didn't work in create!!")
        return res.status(400).json({"error": error.message})
    }
}

// delete a Formula - always returns 200, if it doesn't find the id it considers task complete.
const deleteFormula = async (req, res) => {
    const {id} = req.params

    try{
        const Formula = await FormulaTable.delete(id)
        return res.status(200).json(Formula)
    }catch(error){
        return res.status(400).json({"error": error.message})
    }
}

// update a Formula
const updateFormula = async (req,res) => {
    const {id, name, formula, tags} = req.body; // destructuring

    if(!id||!name || !formula){
        return res.status(400).json({"error": 'Missing variables! Need id, name and formula'})
    }

    try{
        const Formula = await FormulaTable.update({
            "id":id,
            "name": name,
            "formula": formula,
            "tags": tags
        })
        return res.status(200).json(Formula)
    }catch(error){
        return res.status(400).json({"error": error.message})
    }
}





module.exports = {
    createFormula, 
    getFormula, 
    getAllFormulas,
    queryFormulasByName,
    deleteFormula,
    updateFormula
}

