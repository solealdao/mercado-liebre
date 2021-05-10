let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');


//Ruta de redireccionamiento a Home
router.get('/', mainController.home);

//Ruta de redireccionamiento a Registro
router.get('/register', mainController.registrar);

//Ruta de redireccionamiento a Login
router.get('/login', mainController.login);


module.exports = router;