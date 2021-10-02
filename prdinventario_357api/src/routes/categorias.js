const  express = require('express');
const router = express.Router();

const Categorias = require('../models/categorias');


// Crear
router.post ('/Categorias-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const categoriadb = await  Categorias.create(body);
         res.status(200).json(categoriadb);
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
router.get('/Categorias/:codigo', async(req, res) => {
    const codigo = req.params.codigo;
    try {
    const categoriadb = await Categorias.findOne({codigo});
    res.json(categoriadb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los documentos
router.get('/Categorias', async (req, res) => {
    try {
        const categoriadb = await Categorias.find();
        res.json(categoriadb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Categorias/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const categoriadb = await Categorias.findByIdAndDelete({
               _id
           });
           if (!categoriadb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(categoriadb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Categorias/:id', async (req, res) => {
       const _id = req.params.id;
       const body = req.body;
       try {
           const categoriadb = await Categorias.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(categoriadb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;