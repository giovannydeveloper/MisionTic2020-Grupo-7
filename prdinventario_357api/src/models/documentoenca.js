

const  mongoose = require('mongoose');
const Schema =mongoose.Schema;
const docencaSchema = new Schema({
    
    idtipo :{ type : Number},
    idbodega :{ type : Number},    
    idtercero :{ type : Number},
    fecha: {
        type: Date,
        require: true
    },
    
    condicionpago : { type : Number},
    docproveedor : String,
    notas :String,
    estado: {
        type: Boolean,
        default: true
    },
    totalsub : { type : Number},
    totaldcto :{ type : Number},
    totalimpuestos :{ type : Number},
    total :{ type : Number}

});
const docenca = mongoose.model('Documentos_Enca', docencaSchema);
module.exports =docenca;