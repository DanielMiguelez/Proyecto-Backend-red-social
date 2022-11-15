const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const UserController = {
  async createUser(req, res, next) {
    try {
      let password;
      if (req.body.password) {
        password = await bcrypt.hash(req.body.password, 10);
      }
      const user = await User.create({ ...req.body, password });
      res.status(201).send({ msg: "user succesfully created", user });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      res.send({ message: "Welcome " + user.name, token });
    } catch (error) {
      console.error(error);
    }
  },

  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "There was a problem trying to disconnet the user",
      });
    }
  },
  
  async getInfo(req, res, ) {
    try {
      const user = await User.findById(req.user._id)

        .populate({
          path: "postIds",
        })

      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = UserController;
