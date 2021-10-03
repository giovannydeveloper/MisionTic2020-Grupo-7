const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const urldb= require("./src/config/config")

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(methOverrides('_method'));

//app.use(express.static(path.join(__dirname, 'public')));
// Rutas
app.use('/api', require('./src/routes/usuario'));
app.use('/api', require('./src/routes/categorias'));
app.use('/api', require('./src/routes/productos'));
app.use('/api', require('./src/routes/terceros'));
app.use('/api', require('./src/routes/documentosenca'));
app.use('/api', require('./src/routes/documentosdet'));






// Conexión base de datos
const mongoose = require('mongoose');
const uri = urldb.url;
const options = {useNewUrlParser:true, useUnifiedTopology:true};

mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) });



// Middleware 
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));



app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
 console.log('Example app listening on port'+ app.get('puerto'));
}); 