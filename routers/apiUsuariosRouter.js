const express = require("express");

const router = express.Router();


const { check } = require('express-validator');

const { validarInputs } = require('../middleware/validarInputs');


const { getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } = require("../controllers/usuariosController");



// get todos
router.get('/usuarios', getUsuarios);


// get uno
router.get('/usuarios/:id', getUsuario);


// crear uno (post)
router.post('/usuarios', 

    [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarInputs],   // servicio es body.servicio y el mensaje del error
    crearUsuario);


// actualizar uno (put)
router.put('/usuarios/:id',

    [check('nombre', 'El servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarInputs],  // servicio es body.servicio y el mensaje del error
    actualizarUsuario);


// elminar uno
router.delete('/usuarios/:id', eliminarUsuario);

//Exportamos 
module.exports = router