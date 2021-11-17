
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docdetSchema = new Schema({
    
    
    
    codigo  :{ type : String},
    descripcion : { type : String},    
    cantidd : { type : Number},
    precio :{ type : Number},
    dcto : { type : Number},
    iva :{ type : Number},
    subtotal : { type : Number},
    iddocenc : { type : String},
    estado: {
        type: Boolean,
        default: true
    }

});
const docdet = mongoose.model('Documentos_Det', docdetSchema);
module.exports =docdet;