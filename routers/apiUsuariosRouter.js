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
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'No es un email correcto').isEmail(),
    check('password', 'Falta la password').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 4 caracteres').isLength({ min: 4 }),
        validarInputs],   // servicio es body.servicio y el mensaje del error
    crearUsuario);


// actualizar uno (put)
router.put('/usuarios/:id',

    [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'No es un email correcto').isEmail(),
    check('password', 'Falta la password').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 4 caracteres').isLength({ min: 4 }),
        validarInputs],  // servicio es body.servicio y el mensaje del error
    actualizarUsuario);


// elminar uno
router.delete('/usuarios/:id', eliminarUsuario);

//Exportamos 
module.exports = router