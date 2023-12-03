const Product = require("../../models/producto");

const productController = {
  index: async (req, res) => {
    const products = await Product.findAll();
    console.log(products)
    res.render("inicio", { products: products });
    
  },
  create: async (req, res) => {
    const { nombre, precio } = req.body;
    const newProduct = await Product.create({ nombre, precio });
    // res.render("inicio")
    res.redirect("/admin/products");
  },

  getCreate: (req, res) => {
    console.log("Rendering create");
    res.render("admin/create");
  },
};

module.exports = productController;
