const Producto = require("../models/producto")



const mainController = {
    home: async (req, res)=> {
        try{
            const products = await Producto.findAll()
            res.render("inicio", {products: products});
        }catch(e){
            console.log(e)
            res.sendStatus(500).send(e)
        }
    },


    contact: (req, res)=> res.send("contact"),
    about: (req, res)=>res.send("about"),
    faqs: (req, res)=>res.send("faqs")
}

module.exports = mainController