const userModel = require("../models/user");

const { body } = require("express-validator");

const registerValidations = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida")
    .bail()
    .custom((value, { req }) => {
      return new Promise(async (resolve, reject) => {
        try {
          const user = await userModel.findOne({
            where: {
              email: value,
            },
          });

          if (user) {
            console.log(user);
            return reject();
          } else {
            return resolve();
          }
        } catch (error) {
          console.log(error);
        }
      });
    })
    .withMessage("Dirección de correo electrónico duplicada"),
  body("password")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
    })
    .withMessage("La contraseña debe tener ...")
    .bail()
    .custom((value, { req }) => value === req.body.password_confirmation)
    .withMessage("Las contraseñas no coinciden"),
];

module.exports = { registerValidations }