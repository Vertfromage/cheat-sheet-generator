const express = require('express')
const {
    createPage,
    queryPagesByUserId,
    getPage,
    getAllPages,
    deletePage,
    updatePage
} = require('../controllers/PageController')

const router = express.Router()

// GET all Pages
router.get('/', getAllPages)

// query Page by userId
router.get('/user/:userId', queryPagesByUserId)

// get a single Page by id
router.get('/:id', getPage)

// POST a new Page
router.post('/', createPage)

// DELETE a Page
router.delete('/:id', deletePage)

// UPDATE a Page
router.patch('/', updatePage)


module.exports = router