const express = require('express');
const cors = require('cors')
const {route} = require('./routers/routerFront');

const {conexion} = require('./helpers/dbConect');

//conectar dotenv
require('dotenv').config()

// configurar servidor
const app = express()

const port = process.env.PORT || 3000;

// console.log(process)  // console.log(process.env.URI_CONECT)

app.use(express.static('public'));


// Establecer ejs como template engine
app.set('view engine' , 'ejs');
// Estableder cual va a ser la carpeta de vistas
app.set("views",__dirname + "/views");


// CONEXION ///

conexion()


// rutas
app.use("/", require("./routers/routerFront"));


app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:'error 404',
        parrafo: `Eto no va eh`
    }) 
 });


// Chasqueador
app.listen(port, () => {
    console.log('servidor por el puerto', {port})
})

