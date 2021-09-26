import mongoose from mongoose;
const Schema = mongoose.Schema;

const docdetSchema = new Schema({
    
    idtipo : { type : Number},
    iddocenc  :{ type : Number},    
    idproducto  :{ type : Number},
    cantidd : { type : Number},
    valorunidad :{ type : Number},
    costounidad :{ type : Number},
    porcentajedcto : { type : Number},
    porcentajeiva :{ type : Number},
    estado: {
        type: Boolean,
        default: true
    },
    subtotal : { type : Number},
    

});
const docdet = mongoose.model('Documentos_Det', docdetSchema);
module.exports =docdet;