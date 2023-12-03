const User = require("../models/user")

const authController = {
    register: (req, res)=>{
        res.send("register")
    },
    postRegister: (req, res)=>{

    },
    login: (req, res)=>{
        res.render("auth/login")
    },
    postLogin: (req, res)=>{
        const {email, password} = req.body
        try{
            const user = User.findOne({where: {email}})
        }catch(e){
            res.send("Error al iniciar sesion")
        }
        res.send("post login")
    }
}

module.exports = authController