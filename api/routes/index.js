const router = require('express').Router()

const authRouter = require('./auth.router')
const taskRouter = require('./task.router')

router.use('/auth', authRouter)
router.use('/task', taskRouter)

module.exports = router 