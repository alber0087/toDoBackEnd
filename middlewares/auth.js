const jwt = require('jsonwebtoken')
const User = require('../api/models/user.model')

const checkAuth = (req, res, next) => {

  if (!req.headers.token) {
    return res.status(500).send('No token provided')
  }

  jwt.verify(req.headers.token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.status(500).send('Invalid token')
    }

    const user = User.findOne({ where: { email: data.email }})

    if (!user) {
      return res.status(500).send('Invalid token')
    }
    res.locals.user = user
    next()
  })
}

module.exports = checkAuth