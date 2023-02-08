const express = require('express')
const {
    createFormula,
    getAllFormulas,
    queryFormulasByName,
    getFormula,
    deleteFormula,
    updateFormula
} = require('../controllers/FormulaController')

const router = express.Router()

// GET all Formulas
router.get('/', getAllFormulas)

// get a single Formula by id
router.get('/:id', getFormula)

// querry formula by name
router.get('/:name', queryFormulasByName)

// POST a new Formula
router.post('/', createFormula)

// DELETE a Formula
router.delete('/:id', deleteFormula)

// UPDATE a Formula
router.patch('/:id', updateFormula)


module.exports = router