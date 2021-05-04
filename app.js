const express = require ('express');
const app = express();
const path = require('path');

//Configuraciones
const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));


app.listen(procees.env.PORT || 3000, function (){
console.log('Servidor corriendo OK');
})

//Ruta de redireccionamiento a Home
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

//Ruta de redireccionamiento a Registro
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

//Ruta de redireccionamiento a Login
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
