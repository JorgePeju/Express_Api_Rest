const Servicio = require('../models/servicioModel');

// get todos los servicios

const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find()
        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los servicios',
            total_servicios: servicios.length,
            limit: 30,
            data: servicios
        })

    } catch (error) {

        return res.status(404).json({
            ok: false,
            msg: 'Error al obtener los servicios'
        })
    }
}

// get un servicio, añadir el params para la id

const getServicio = (req, res) => {
    //recoger id - params

    try {

        res.status(200).json({
            ok: true,
            msg: 'Obteniendo un servicio'
        })


    } catch (error) {

    }

}

// crear un servicio (post)

const crearServicios = (req, res) => {

    res.status(201).json({
        ok: true,
        msg: 'Creando un servicio servicios'
    })
}

// actualizar un servicio (put)

const actualizarServicio = (req, res) => {

    res.status(200).json({
        ok: true,
        msg: 'Actializando un servicio'
    })
}


// eliminar un servicio

const eliminarServicio = (req, res) => {

    res.status(200).json({
        ok: true,
        msg: 'Eliminando un servicio'
    })
}



module.exports = {

    getServicios,
    getServicio,
    crearServicios,
    actualizarServicio,
    eliminarServicio

}