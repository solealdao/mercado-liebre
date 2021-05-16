const path = require('path');

const controlador ={
    home: function(req, res){
        res.render(path.resolve(__dirname, '../views/home.ejs'))
    },
    registrar: function(req, res){
        res.render(path.resolve(__dirname, '../views/register.ejs'))
    },
    login: function(req, res){
        res.render(path.resolve(__dirname, '../views/login.ejs'))
    },
};


module.exports = controlador;