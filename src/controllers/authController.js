const User = require("../models/user");
const { validationResult } = require("express-validator");
const bycript = require("bcryptjs");

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
  postLogin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });

      if(!user) {
        return res.send("Usuario no encontrado");
      }else if(!(await bycript.compare(password, user.password))) {
        return res.send("Contraseña incorrecta");
      }else{
        req.session.userId = user.id;
        res.redirect("/");
      }
    } catch (e) {
      res.send("Error al iniciar sesion");
    }
    
  },
  logout: (req, res)=>{
    req.session = null,
    res.redirect("/login")
  }
};

module.exports = authController;
