const  express = require('express');
const router = express.Router();

const Tipo_documentos = require('../models/tiposdocumentos');

// Crear
router.post ('/Tipo_documentos-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const tiposdocdb = await  Tipo_documentos.create(body);
         res.status(200).json(tiposdocdb);
     } catch (err) {
         return res.status(500).json(
             {
                 mensaje : err.message || 'No fue posible actualizar',
                 err
             }
         )
         
     }

});

// Get con parámetros
router.get('/Tipo_documentos/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const tiposdocdb = await Tipo_documentos.findOne({_id});
    res.json(tiposdocdb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/Tipo_documentos', async (req, res) => {
    try {
        const tiposdocdb = await Tipo_documentos.find();
        res.json(tiposdocdb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Tipo_documentos/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const tiposdocdb = await Tipo_documentos.findByIdAndDelete({
               _id
           });
           if (!tiposdocdb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(tiposdocdb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Tipo_documentos/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const tiposdocdb = await Tipo_documentos.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(tiposdocdb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;