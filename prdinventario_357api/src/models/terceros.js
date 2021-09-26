

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;
const terceroSchema = new Schema({
    nit: {
        type: String,
        require: [true, "Código de usuario"]
    },
    codigo: String,
    nombre: String,
    direccion: String,
    telefono: String,
    telefono2: String,
    movil: String,
    estado: {
        type: Boolean,
        default: true
    },
    tipotercero: Number

});
const tercero = mongoose.model('Terceros', terceroSchema);
module.exports =tercero;