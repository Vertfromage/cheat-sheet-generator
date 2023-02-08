// This is my controller, this is what the routes use to do stuff with the database

const AWS = require('aws-sdk')
const dynamoose = require('dynamoose')

// Import my model
const FormulaTable = require("../models/FormulaTable")

// get a single Formula
const getFormula = async (req, res) => {
    const {id} = req.params

    try {
        const Formula = await FormulaTable.get(id)
        Formula.toJSON    
        res.status(200).json(Formula)
    } catch (error) {
        console.error(error);
        return res.status(404).json({"error": 'No such Formula'})
    }
}

// get a multiple Formulas - scan by default returns every item, but use filters to get specific sets
// Its not a efficient as querry when using filters.
const getAllFormulas = async (req, res) => {
    const {name} = req.params
    try{
        const Formulas = await FormulaTable.scan().exec()
        return res.status(200).json(Formulas)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": "Can't get all formulas"})
    }
}

// Scans by name - Query is more efficient than scan
const queryFormulasByName = async (req, res) => {
    const {name} = req.params
    try{
        const Formulas = await FormulaTable.query().filter("name").eq(name).exec()
        return res.status(200).json(Formulas)
    }catch(error){
        console.error(error);
        return res.status(404).json({"error": "Can't find that formula"})
    }
}

// Scan by tags - TODO

// create new Formula
const createFormula = async (req, res) => {
    const {name, formula, tags} = req.body; // destructuring
    id = AWS.util.uuid.v4()
    console.log("created id = "+id)
    console.log(tags)

    // add doc to db
    try{
        const Formula = await FormulaTable.create({id, name, formula, tags})
        return res.status(200).json(Formula) // return the object
    }catch(error){
        console.log("something didn't work in create!!")
        return res.status(400).json({"error": error.message})
    }
}

// delete a Formula
const deleteFormula = async (req, res) => {
    const {id} = req.params

    if(typeof(id)!=String){
        return res.status(404).json({"error": 'No such Formula'})
    }

    try{
        const Formula = await FormulaTable.delete(id)
        return res.status(200).json(Formula)
    }catch(error){
        return res.status(400).jsong({"error": 'No such Formula'})
    }
}

// update a Formula
const updateFormula = async (req,res) => {
    const {id, name, formula, tags} = req.body; // destructuring

    try{
        const Formula = await FormulaTable.update({
            "id":id,
            "name": name,
            "formula": formula,
            "tags": tags
        })
        return res.status(200).json(Formula)
    }catch(error){
        return res.status(400).jsong({"error": "No luck"})
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

