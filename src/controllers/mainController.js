const path = require('path');

const controlador ={
    home: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/home.html'))
    },
    registrar: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    },
    login: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/login.html'))
    },
};


module.exports = controlador;