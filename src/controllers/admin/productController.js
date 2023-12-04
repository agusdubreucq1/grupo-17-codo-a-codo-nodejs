const Producto = require("../../models/producto");
const Product = require("../../models/producto");

const productController = {
  index: async (req, res) => {
    const products = await Product.findAll();
    console.log(products)
    res.render("admin/productos/index", { products: products });
    
  },
  create: async (req, res) => {
    const { nombre, precio } = req.body;
    const newProduct = await Product.create({ nombre, precio });
    // res.render("inicio")
    res.redirect("/admin/products");
  },

  getCreate: (req, res) => {
    console.log("Rendering create");
    res.render("admin/productos/create");
  },
  delete: async (req, res)=>{
    const { id } = req.params
    try{
      await Producto.destroy({
        where:{
          id: id
        }
      })
      res.redirect('/admin/products')
    }catch(e){
      res.send("no se pudo eliminar el producto")
    }
  }
};

module.exports = productController;
