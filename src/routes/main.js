let express = require('express');

let router = express.Router();

const path = require("path");

router.get('/', function(req, res){
    res.sendFile((path.join(__dirname, "../", "views", "vistaTurnos.html")))
})

router.get('/listadoDeTurnos', function(req, res){
    res.sendFile((path.join(__dirname, "../", "views", "listadoDeTurnos.html")))
})

router.get('/login', function(req, res){
    res.sendFile((path.join(__dirname, "../", "views", "login.html")))
})


module.exports = router;