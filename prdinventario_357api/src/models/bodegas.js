

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;

const bodegasSchema = new Schema({
    codigo: {
        type: String,
        require: [true, "Código de usuario"]
    },
    nombre: String,
    activo: {
        type: Boolean,
        default: true
    }

});
const bodega = mongoose.model('Bodegas', bodegasSchema);

module.exports =bodega;