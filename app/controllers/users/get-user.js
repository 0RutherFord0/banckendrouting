const User = require('../../model/users');
const controller = async (req, res) => {
    const user = await User.find();
    res.send(user);
};

module.exports = controller;