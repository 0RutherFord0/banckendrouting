const User = require('../../model/users');

const controller = async (req, res) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
}

module.exports = controller;