const {Schema, model} = require('mongoose');

const ServicioSchema = new Schema ({

    nombre:String,
    descripcion:{

       type:String,
       required:true,
       trim:true 

    },
})

module.exports=model('Servicio', ServicioSchema)