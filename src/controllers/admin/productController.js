const Categoria = require("../../models/categoria");
const Licencia = require("../../models/licencia");
const Producto = require("../../models/producto");
// const Product = require("../../models/producto");

const productController = {
  index: async (req, res) => {
    try {
      const products = await Producto.findAll({
        include: [
          {
            model: Categoria,
            attributes: ["nombre"],
          }
        ]
      });
      console.log(products[0]);
      res.render("admin/productos/index", { products: products });
    } catch (e) {
      console.log(e);
      res.send("error al mostrar productos");
    }
  },
  create: async (req, res) => {
    const { nombre, descripcion,  precio, categoria, SKU, descuento, stock, cuotas } = req.body;
    const newProduct = await Producto.create({ nombre, precio, CategoryId: categoria, SKU, descuento, stock, cuotas, descripcion });
    // res.render("inicio")
    res.redirect("/admin/products");
  },

  getCreate: async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      const licencias = await Licencia.findAll();
      console.log(categorias)
      console.log("Rendering create");
      res.render("admin/productos/create", {categorias: categorias, licencias: licencias});
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  },
  getEdit: async (req, res)=>{
    const {id} = req.params
    try{
      const product = await Producto.findOne({
        include:[
          {
            model: Categoria
          }
        ],
        where:{
          id:id
        }
      })
      const categorias = await Categoria.findAll()
      const licencias = await Licencia.findAll()
      res.render("admin/productos/edit", {product:product, categorias: categorias, licencias: licencias})
    }catch(e){
      console.log(e)
      res.send("error al editar")
    }
  },
  edit: async (req, res)=>{
    const { id }= req.params
    const { nombre, precio, categoria, SKU, descuento, stock, cuotas, descripcion } = req.body;
    console.log('\n\n\n valores del edit:\n\n',nombre, precio, categoria, SKU, descuento, stock, cuotas, descripcion)
    try{
      await Producto.update({
        nombre: nombre,
        precio: precio,
        CategoryId: categoria,
        SKU: SKU,
        cuotas: cuotas,
        descuento: descuento,
        stock: stock,
        descripcion: descripcion

      },{
        where:{
          id:id
        }
      })
      res.redirect('/admin/products')
    }catch(e){
      console.log(e)
      res.send("error al editar")
    }

  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await Producto.destroy({
        where: {
          id: id,
        },
      });
      res.redirect("/admin/products");
    } catch (e) {
      res.send("no se pudo eliminar el producto");
    }
  },
};

module.exports = productController;
