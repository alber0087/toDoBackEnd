const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken')
const User   = require('../models/user.model')


const signup = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body)
    const token = jwt.sign({ email: user.email}, process.env.JWT_SECRET, { expiresIn: '7d'})
    res.status(200).json({ token })
  } catch (err) {
    res.status(500).send('Error creating user')
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    res.send(user)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error logging in')
  }
}

module.exports = { signup, login }

