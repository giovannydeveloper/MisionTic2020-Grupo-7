

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;

const tipoSchema = new Schema({
    prefijo: {
        type: String,
        require: [true, "Código de usuario"]
    },
    nombre: String,
    activo: {
        type: Boolean,
        default: true
    },
    tipodoc :{ type : Number}
});
const tipo = mongoose.model('Tipo_Documentos', tipoSchema);
module.exports =tipo;