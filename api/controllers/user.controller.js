const bcrypt = require("bcrypt");

const User = require("../../models/user.model.js");

const saltRounds = 10;

module.exports.index = async (req, res) => {
  let users = await User.find();
  res.json(users);
};

module.exports.delete = async (req, res) => {
  let id = req.params.id;

  let user = await User.findByIdAndRemove(id);

  res.json(user);
};
