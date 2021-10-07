const  express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Crear usuario
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
router.post ('/usuario-login', async (req, res ) =>{
  //  console.log(req);
    const body = req.body;
    
    try {
        const usuairobd = await  Usuario.find( 
            {
            codigo : {'$regex' : body.codigo},
            clave  : {'$regex' : body.clave}
            }
        );
      //console.log(usuairobd);
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
router.get('/usuario-login2/:usuario&:clave', async (req, res ) =>{
    console.log(req);
    const codigo = req.params.codigo;
    const clave = req.params.clave;
    
    console.log(body.username);
    
    try {
        const usuairobd = await  Usuario.find( 
            {
            codigo : {'$regex' : codigo},
            clave  : {'$regex' :clave}
            }
        ); 
        res.json(usuairobd);
 
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(
            {
                mensaje : err.message || 'No fue posible actualizar',
                err
            }
        )
        
    }

});
// Get con parámetros usuario
router.get('/usuario/:codigo', async(req, res) => {
    const codigo = req.params.codigo;
    try {
    const usuairobd = await Usuario.findOne({codigo});
    res.json(usuairobd);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con todos los usuario
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
   
   // Delete eliminar un usuario
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
   // Put actualizar un usuario
   router.put('/usuario_actualizar', async (req, res) => {
       const _id = req.body.id;
       const body = req.body; 
       console.log(_id);
       try {
           const usuairobd  = await Usuario.findByIdAndUpdate(
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