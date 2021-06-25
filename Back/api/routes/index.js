const express = require('express')
const router = express.Router()

const userRoutes = require('./usersRoutes')
const favoriteRouter = require('./favourite')

router.use('/users',userRoutes)
router.use('/favorites',favoriteRouter)

module.exports =router