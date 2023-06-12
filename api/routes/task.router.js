const router = require('express').Router()

const { addTask, getAllTasks } = require('../controllers/task.controller')
const checkAuth = require('../../middlewares/auth')

router.get('/', checkAuth, getAllTasks)
router.post('/', checkAuth, addTask)

module.exports = router 