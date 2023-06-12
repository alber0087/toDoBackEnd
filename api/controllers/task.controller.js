const Task = require('../models/task.model')

const getAllTasks = async (req, res) => {
  try {
    const tasks = ['Sacar la basura', 'Fregar la basura', 'Pasear al perro']
    return res.status(200).json(tasks)  
  } catch (err) {
    return res.status(500).send('Error')
  }
}

const addTask = async (req, res) => {
  try {
    const task = await res.locals.user.createTask(req.body)
    res.status(200).json(task)
  } catch (err) {
    res.status(500).send('Error adding task')
  }
}

module.exports = { addTask, getAllTasks }



