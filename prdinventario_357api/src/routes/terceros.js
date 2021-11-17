const  express = require('express');
const router = express.Router();

const Terceros = require('../models/terceros');

// Crear
router.post ('/Terceros-nuevo', async (req, res ) =>{
     const body = req.body;
     try {
         const tercerodb = await  Terceros.create(body);
         res.status(200).json(tercerodb);
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
router.get('/Terceros-id/:id', async(req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try {
    const tercerodb = await Terceros.findOne({_id});
    res.json(tercerodb);
    } catch (err) {
      
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});
// Get con parámetros nombre
router.get('/Terceros_nombre/:nombre', async(req, res) => {
    const nombre = req.params.nombre;
    console.log(nombre);
    try {
    const tercerodb = await Terceros.find(
        {
        $or : [
        {nombre : {'$regex' : nombre}},
        {nit: {'$regex' : nombre}}
        
        
        ]
    
    }); 
    res.json(tercerodb);
    } catch (err) {
    return res.status(400).json({
                    mensaje: err.message ||  'Ocurrio un error',
    err
    })
    }
});

router.post ('/Terceros_buscar', async (req, res ) =>{
    
      const body = req.body;
      
      try {
       
          const tercerodb = await  Terceros.find( 
            {
                $or : [
                {nombre : {'$regex' : body.filtro}},
                {nit: {'$regex' : body.filtro}},
               // {codigo: {'$regex' : body.filtro}}        
                
                ]
            }
              
          );
      
          res.status(200).json(tercerodb);
   
      } catch (err) {
      
          return res.status(500).json(
              {
                  mensaje : err.message || 'No fue posible consultar',
                  err
              }
          )
          
      }
  
  });
// Get con todos los tercero
router.get('/Terceros', async (req, res) => {
    try {
        const tercerodb = await Terceros.find();
        res.json(tercerodb);
    } catch (err) {
        return res.status(400).json({
            mensaje: err.message || 'Ocurrio un error',
            err
        })
    }
});
   

   // Delete eliminar una nota
   router.delete('/Terceros/:id', async (req, res) => {
       const _id = req.params.id;
       try {
           const tercerodb = await Terceros.findByIdAndDelete({
               _id
           });
           if (!tercerodb) {
               return res.status(400).json({
                        mensaje: err.message || 'No se encontró el id indicado',
                   error
               })
           }
           res.json(tercerodb);
       } catch (err) {
           return res.status(400).json({
                mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   });
   // Put actualizar una nota
   router.put('/Terceros-actualizar', async (req, res) => {
    const _id = req.body.id;
    const body = req.body; 
       try {
           const tercerodb = await Terceros.findByIdAndUpdate(
               _id,
               body, {
                   new: true
               });
           res.json(tercerodb);
       } catch (err) {
           return res.status(400).json({
                 mensaje: err.message || 'Ocurrio un error',
               err
           })
       }
   })
   

module.exports = router;