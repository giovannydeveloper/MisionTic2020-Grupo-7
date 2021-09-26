const  express = require('express');
const router = express.Router();

const Productos = require('../models/productos');

// Crear
router.post ('/Productos-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const productodb = await  Productos.create(body);
         res.status(200).json(productodb);
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
router.get('/Productos/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const productodb = await Productos.findOne({_id});
    res.json(productodb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/Productos', async (req, res) => {
    try {
        const productodb = await Productos.find();
        res.json(productodb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Productos/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const productodb = await Productos.findByIdAndDelete({
               _id
           });
           if (!productodb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(productodb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Productos/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const productodb = await Productos.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(productodb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;