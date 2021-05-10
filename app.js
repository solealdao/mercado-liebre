const express = require ('express');
const app = express();
const path = require('path');

let rutasMain = require('./src/routes/main.js');

//Configuración recursos estáticos
const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));

//Configuración rutas
app.use('/', rutasMain);

// Configuración del servidor
app.listen(process.env.PORT || 3000, function (){
console.log('Servidor corriendo OK');
})