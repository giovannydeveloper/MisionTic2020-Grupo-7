const  express = require('express');
const router = express.Router();

const Documentos_Det = require('../models/documentosdet');

// Crear
router.post ('/Documentos_Det-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const docdetadb = await  Documentos_Det.create(body);
         res.status(200).json(docdetadb);
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
router.get('/Documentos_Det/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const docdetadb = await Documentos_Det.findOne({_id});
    res.json(docdetadb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/Documentos_Det', async (req, res) => {
    try {
        const docdetadb = await Documentos_Det.find();
        res.json(docdetadb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Documentos_Det/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const docdetadb = await Documentos_Det.findByIdAndDelete({
               _id
           });
           if (!docdetadb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(docdetadb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Documentos_Det/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const docdetadb = await Documentos_Det.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(docdetadb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;