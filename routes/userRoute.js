const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)
// router.post('/', categoryController.createCategory)
// router.put('/:id', categoryController.updateCategory)
// router.delete('/:id', categoryController.deleteCategory)

module.exports = router