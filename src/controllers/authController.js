const authController = {
    register: (req, res)=>{
        res.send("register")
    },
    postRegister: (req, res)=>{

    },
    login: (req, res)=>{
        res.send("login")
    },
    postLogin: (req, res)=>{
        res.send("post login")
    }
}

module.exports = authController