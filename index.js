const express = require("express")
require("dotenv").config();
const mainRoutes = require("./src/routes/mainRoutes")

const app = express()

app.use('/', mainRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}: http://localhost:${PORT}`)
})