require("dotenv").config();

const express = require("express")
const mainRoutes = require("./src/routes/mainRoutes");
const sequelize  = require("./src/models/conexion");
const user = require('./src/models/user')

const app = express()

app.use('/', mainRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=>{
    try{
        await sequelize.sync();
    }catch(e){
        console.log('error de conexion a la db: ', e)
    }
    console.log(`Escuchando en el puerto ${PORT}: http://localhost:${PORT}`)
})