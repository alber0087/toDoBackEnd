require('dotenv').config()

const express = require('express')
const sequelize = require('./db')



const app = express()

const connectDB = async () => {
  try {
    await sequelize.authenticate()
  } catch(err) {
    console.error(err)
    throw new Error('Cannot connect to the database')
  }
}

const start = async () => {
  try {
    app.get('/', (req, res) => res.send('Welcome to the API!'))
    await app.listen(process.env.PORT)
    await connectDB()
    console.info(`Server running on port ${process.env.PORT}`)
  } catch(err) {
    console.error(err)
    throw new Error(`Cannot start server on port ${process.env.PORT}`)
  }
}

start()





