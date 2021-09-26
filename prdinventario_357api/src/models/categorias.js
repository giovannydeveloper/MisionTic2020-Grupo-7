const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    codigo: String,
    nombre: String,
    activo: {
        type: Boolean,
        default: true
    }

});
const categoria = mongoose.model('Categoria', categoriaSchema);
module.exports = categoria;