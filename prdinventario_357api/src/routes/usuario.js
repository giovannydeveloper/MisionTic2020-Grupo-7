const  express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

// Crear
router.post ('/usuario-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const usuairobd = await  Usuario.create(body);
         res.status(200).json(usuairobd);
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
router.get('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const usuairobd = await Usuario.findOne({_id});
    res.json(usuairobd);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/usuarios', async (req, res) => {
    try {
        const usuairobd = await Usuario.find();
        res.json(usuairobd);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/usuario/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const usuairobd = await Usuario.findByIdAndDelete({
               _id
           });
           if (!usuairobd) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(usuairobd);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/usuario/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const usuarioDb = await Usuario.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(usuairobd);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;