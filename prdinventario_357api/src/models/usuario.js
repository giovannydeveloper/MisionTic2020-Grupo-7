

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;

const usuarioSchema=new Schema (
    {
        codigo :{ type : String, require :[true,"Código de usuario"]},
        nombre :   String,
        clave : { type : String, require :[true,"Clave de usuario"]},
        email : { type : String, require :[true,"Email de usuario"]},
        activo : {type :  Boolean ,default :true  }

    }
);
const usuario =mongoose.model('Usuario',usuarioSchema);

module.exports =usuario;