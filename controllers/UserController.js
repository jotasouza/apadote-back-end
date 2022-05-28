const User = require("../models/User");

module.exports = class UserController {
  static async register(require, response) {
    response.json("Olá Apadote");
  }
};
