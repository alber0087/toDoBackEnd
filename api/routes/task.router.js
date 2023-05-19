const router = require('express').Router()

const { addTask } = require('../controllers/task.controller')
const checkAuth = require('../../middlewares/auth')

router.post('/', checkAuth, addTask)

module.exports = router 