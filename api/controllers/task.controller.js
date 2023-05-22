const Task = require('../models/task.model')

const addTask = async (req, res) => {
  try {
    const task = await res.locals.user.createTask(req.body)
    res.status(200).json(task)
  } catch (err) {
    res.status(500).send('Error adding task')
  }
}

module.exports = { addTask }