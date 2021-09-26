const  express = require('express');
const router = express.Router();

const Bodegas = require('../models/bodegas');

// Crear
router.post ('/Bodegas-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const bodegadb = await  Bodegas.create(body);
         res.status(200).json(bodegadb);
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
router.get('/Bodegas/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const bodegadb = await Bodegas.findOne({_id});
    res.json(bodegadb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/Bodegas', async (req, res) => {
    try {
        const bodegadb = await Bodegas.find();
        res.json(bodegadb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Bodegas/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const bodegadb = await Bodegas.findByIdAndDelete({
               _id
           });
           if (!bodegadb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(bodegadb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Bodegas/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const bodegadb = await Bodegas.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(bodegadb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;