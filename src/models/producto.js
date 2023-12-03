const sequelize = require('./conexion');
const { DataTypes } = require("sequelize");
const Categoria  = require("./categoria");

const Producto = sequelize.define('Product', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Producto.belongsTo(Categoria)

module.exports = Producto