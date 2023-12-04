const User = require("../models/user");
const { validationResult } = require("express-validator");

const authController = {
  register: (req, res) => {
    res.render("auth/register");
  },
  postRegister: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("auth/register", {
        errors: errors.array(),
        values: req.body,
      });
    }

    try {
      const { email, password } = req.body;
      const user = User.create({ email, password });
      res.send("registrado")
    } catch (e) {
      res.send(e);
    }
  },
  login: (req, res) => {
    res.render("auth/login");
  },
  postLogin: (req, res) => {
    const { email, password } = req.body;
    try {
      const user = User.findOne({ where: { email } });
    } catch (e) {
      res.send("Error al iniciar sesion");
    }
    res.send("post login");
  },
};

module.exports = authController;
