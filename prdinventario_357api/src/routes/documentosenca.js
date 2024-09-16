const  express = require('express');
const router = express.Router();

const Documentos_Enca = require('../models/documentoenca');

// Crear
router.post ('/Documentos_Enca-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const docencadb = await  Documentos_Enca.create(body);
         res.status(200).json(docencadb);
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
router.get('/Documentos_Enca/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const docencadb = await Documentos_Enca.findOne({_id});
    res.json(docencadb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/Documentos_Enca', async (req, res) => {
    try {
        const docencadb = await Documentos_Enca.find();
        res.json(docencadb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Documentos_Enca/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const docencadb = await Documentos_Enca.findByIdAndDelete({
               _id
           });
           if (!docencadb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(docencadb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Documentos_Enca/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const docencadb = await Documentos_Enca.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(docencadb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;