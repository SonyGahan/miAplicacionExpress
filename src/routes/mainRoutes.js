const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

//Creamos o migramos desde el archivo app todas las rutas del sitio
router.get('/home', mainController.home);
router.get('/contact', mainController.contact); 
router.get('/about', mainController.about);  

//Exportamos el modulo Router
module.exports = router;