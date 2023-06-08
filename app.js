//REQUERIMOS EXPRESS QUE ES UNA LIBRERIA
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const swaggerRoutes=require('./routes/suaggerRoutes')

const v1SwagerDocs=require('./swagger')
//INICIAMOS LA APLICACION DE EXPRESS EN LA VARIABLE APP
const app = express();
const port=+process.env.PORT || 3000

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log('Hello From The middleware! 🖐');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});




//crearse la funcion y mostrar el id que venga por la req.params


app.use('/api/v1/products', swaggerRoutes);
v1SwagerDocs(app, port)

//COLOCAR A MI APLICACION A ESCUCHAR POR EL PUERTO 3000

module.exports=app;