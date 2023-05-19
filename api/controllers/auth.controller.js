const bcrypt = require('bcrypt')
const User = require('../models/user.model')


const signup = async (req, res) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10)
      const user = await User.create(req.body)
      res.status(200).json(user)
    } catch(err) {
      res.status(500).send('Error creating user')
    }
}

module.exports = { signup }

