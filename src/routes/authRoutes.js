const express = require('express')
const authController = require('../controllers/authController')
const route = express.Router()

route.get('/register', authController.register)
route.post('/register', authController.postRegister)
route.get('/login', authController.login)
route.post('/login', authController.postLogin)

module.exports = route
