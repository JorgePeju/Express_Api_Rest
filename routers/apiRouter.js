const express=require("express");

const router=express.Router();

const {getServicios, getServicio, crearServicios, actualizarServicio, eliminarServicio}= require("../controllers/apiControllers");


// get todos

router.get('/servicios',getServicios);


// get uno

router.get('/servicios/:id',getServicio);


// crear uno (post)

router.post('/servicios',crearServicios);


// actualizar uno (put)

router.put('/servicios/:id',actualizarServicio);


// elminar uno

router.delete('/servicios/:id',eliminarServicio);



//Exportamos 

module.exports=router