const express = require('express')
const productController = require('../../controllers/admin/productController')

const router = express.Router()


router.get('/', productController.index)
router.get('/create', productController.getCreate)
router.post('/create', productController.create)
router.get('/:id', (req, res)=> {
})


module.exports = router