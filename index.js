require('dotenv').config()

const express = require('express')
const sequelize = require('./db')

const createRelations = require('./db/relationships')

const { router } = require('./api/routes')

const app = express()

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await createRelations()
  } catch(err) {
    console.error(err)
    throw new Error('Cannot connect to the database')
  }
}

const start = async () => {
  try {
    app
      .use(express.json())
      .use('/api', router)
      .listen(process.env.PORT)
    await connectDB()
    console.info(`Server running on port ${process.env.PORT}`)
  } catch(err) {
    console.error(err)
    throw new Error(`Cannot start server on port ${process.env.PORT}`)
  }
}

start()








