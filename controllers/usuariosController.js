const Usuarios = require('../models/usuarioModel');

// get todos los usuarios

const getUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuarios.find()

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los servicios',
            total_servicios: usuarios.length,
            limit: 30,
            data: usuarios
        })

    } catch (error) {

        return res.status(404).json({
            ok: false,
            msg: 'Error al obtener los servicios'
        })
    }
}

// get un usuario

const getUsuario = async (req, res) => {

    try {

        const id = req.params.id;
        const usuarios = await Usuarios.findById(id)

        if (!usuarios) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })

        } else {
           return res.status(200).json({
                ok: true,
                msg: 'Obteniendo un servicio',
                data: usuarios
            })
        }


    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener los servicios'

        })
    }

}

// crear un usuario (post)

const crearUsuario = async (req, res) => {


    const newUsuario = new Usuarios(req.body);

    try {

        const usuarios = await newUsuario.save()

        return res.status(201).json({
            ok: true,
            msg: 'Servicio creado',
            data: usuarios
        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el servicio.'
        });

    };

}


// actualizar un servicio (put)

const actualizarUsuario = async (req, res) => {

    try {

        const id = req.params.id;
        const nombre = req.body.nombre;
        const email = req.body.email;
        const password = req.body.password;

        const usuarioActualizado = await Usuarios.findByIdAndUpdate({ _id: id }, { $set: { nombre, email, password } }, { new: true })

        if (!usuarioActualizado) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })
            
        }else {
            return res.status(200).json({
            ok: true,
            msg: 'Actualizando un servicio',
            data: usuarioActualizado,
        })
    }

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el usuario'
        })
    }

}


// eliminar un usuario

const eliminarUsuario = async (req, res) => {

    try {

        const id = req.params.id;
       
       
        const Usuarios = await Usuarios.findById(id)
        if (!Usuarios) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })
            
        }
        else {
            await Usuarios.findByIdAndDelete({ _id: id });
            return res.status(200).json({
            ok: true,
            msg: 'Eliminado el servicio',
        })
    }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el servicios'
        })

    }
}

module.exports = {

    getUsuarios,
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario

}