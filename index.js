require("dotenv").config();

const express = require("express")
const path = require("path")
const mainRoutes = require("./src/routes/mainRoutes");
const authRoute = require('./src/routes/authRoutes');
const productRoute = require('./src/routes/admin/productRoutes');

const sequelize  = require("./src/models/conexion");

const session = require('cookie-session')


const isLogin = (req, res, next)=>{
    if(req.session.userId){
        next()
    }else{
        res.redirect('/login')
    }
}


const app = express()
app.use(session({
    keys: ['dhcndjscn', 'jdxnjdsbsjh']
}))
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
let carpeta_views = path.resolve(__dirname, 'src','views')
console.log("carpeta de views: ", carpeta_views)
app.set('views', carpeta_views)

app.use('/', authRoute)
app.use('/', mainRoutes)

app.use('/admin/products',isLogin, productRoute)


const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=>{
    try{
        await sequelize.sync();
    }catch(e){
        console.log('error de conexion a la db: ', e)
    }
    console.log(`Escuchando en el puerto ${PORT}: http://localhost:${PORT}`)
})