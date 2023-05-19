const express = require('express')
const app = express()

require('dotenv').config()



const start = async () => {
  try {
    app.get('/', (req, res) => res.send('Welcome to the API!'))
    await app.listen(process.env.PORT)
    console.info(`Server running on port ${process.env.PORT}`)
  } catch (err) {
    console.log(err)
  }
}

start()





