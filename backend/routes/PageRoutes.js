const express = require('express')
const {
    createPage,
    queryPagesByName,
    getPage,
    deletePage,
    updatePage
} = require('../controllers/PageController')

const router = express.Router()

// get a single Page by id
router.get('/:id', getPage)

// query Page by name
router.get('/:name', queryPagesByName)

// POST a new Page
router.post('/', createPage)

// DELETE a Page
router.delete('/:id', deletePage)

// UPDATE a Page
router.patch('/', updatePage)


module.exports = router