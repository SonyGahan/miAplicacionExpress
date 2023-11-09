//SERVIDOR ESTATICO CON EXPRESS

//Creamos el entrypoint app.jsr
//importamos el modulo de express
const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes.js')


//Requerimos la dependencia
require('dotenv').config();

//Definimos el puerto que va a estar escuchando el servidor y se configura la primer ruta con respuesta a su peticion
const PORT = process.env.PORT;
//Se agrega la ruta a la carpeta Public indicando de que se trata
//indicamos que peticiones deben ser respondidas con estas rutas
app.use(express.static('public'));
app.use('/', mainRoutes);

//Middleware para manejar el error 404
app.use((req, res, next) => {
   res.status(404).send('Recurso no encontrado');
});

//El metodo listen recibe un parametro PORT con el puerto donde correra el server y un callback que se usara para enviar el mensaje por consola
app.listen(PORT,() => {
   console.log(`Servidor corriendo en http://localhost:${PORT}`);
});





