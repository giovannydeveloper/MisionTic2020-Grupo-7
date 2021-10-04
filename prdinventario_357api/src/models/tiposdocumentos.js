

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;

const tipoSchema = new Schema({
    prefijo: {
        type: String,
        require: [true, "Código de usuario"]
    },
    nombre: String,
      tipodoc :{ type : Number},
      activo: {
        type: Boolean,
        default: true
    }

});
const tipo = mongoose.model('Tipo_Documentos', tipoSchema);
module.exports =tipo;