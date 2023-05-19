const User = require('../api/models/user.model')
const Task = require('../api/models/task.model')

const createRelations = async () => {
  User.hasMany(Task)
  Task.belongsTo(User)
}

module.exports = createRelations