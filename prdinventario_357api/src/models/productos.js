

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;

const productoSchema = new Schema({
    codigo: {
        type: String,
        require: [true, "Código de usuario"]
    },
    descripcion: String,
    precio: {
        type: Number
    },
    preciomasiva: {
        type: Number
    },
    ivaventas: {
        type: Number
    },
    ivacompras: {
        type: Number
    },
    manejainv: {
        type: Number
    },
    loteserial: {
        type: Number
    },
    notas: String,
    idproveedor: {
        type: Number
    },
    idbodegafija: {
        type: Number
    },
    cotocompra: {
        type: Number
    },
    costoemergencia: {
        type: Number
    },
    porcentajedcto: {
        type: Number
    },
    factor: {
        type: Number
    },
    dias: {
        type: Number
    },
    nopedir: {
        type: Boolean,
        default: false
    },
    activo: {
        type: Boolean,
        default: true
    }

});
const producto = mongoose.model('Productos', productoSchema);
module.exports =producto;