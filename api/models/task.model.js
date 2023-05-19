const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Task